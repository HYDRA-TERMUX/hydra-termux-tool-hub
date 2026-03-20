/**
 * HYDRA TERMUX TOOL HUB — script.js
 * Rixon Xavier | hydratermux.blogspot.com
 * Fetch · Filter · Search · Copy · Animate
 */

'use strict';

// ─────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────
let allTools = [];
let toastTimer = null;

// ─────────────────────────────────────────────
//  CATEGORY → COLOR MAP
// ─────────────────────────────────────────────
const CATEGORY_COLORS = {
  Recon:        '#00f0ff',
  Exploitation: '#ff3a3a',
  Password:     '#ffe600',
  OSINT:        '#bf5fff',
  Network:      '#00cfff',
  System:       '#ff9500',
  Dev:          '#00ff41',
  Utility:      '#aaffaa',
};

// ─────────────────────────────────────────────
//  INIT — fetch tools.json
// ─────────────────────────────────────────────
async function init() {
  try {
    const res = await fetch('tools.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    allTools = await res.json();

    // Update counters
    document.getElementById('totalCount').textContent  = allTools.length;
    document.getElementById('footerCount').textContent = allTools.length;

    // Initial render
    renderTools(allTools);
    bindEvents();

  } catch (err) {
    console.error('Failed to load tools.json:', err);
    showLoadError();
  }
}

// ─────────────────────────────────────────────
//  RENDER TOOLS
// ─────────────────────────────────────────────
function renderTools(tools) {
  const grid = document.getElementById('toolGrid');
  const noResults = document.getElementById('noResults');
  const shownCount = document.getElementById('shownCount');

  shownCount.textContent = tools.length;

  if (tools.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  // Build HTML in one shot for performance
  grid.innerHTML = tools.map((tool, i) => buildCard(tool, i)).join('');

  // Stagger animation delays
  grid.querySelectorAll('.tool-card').forEach((card, i) => {
    card.style.animationDelay = `${Math.min(i * 30, 600)}ms`;
  });
}

// ─────────────────────────────────────────────
//  BUILD CARD HTML
// ─────────────────────────────────────────────
function buildCard(tool, index) {
  const cat = escHtml(tool.category || 'Utility');
  const name = escHtml(tool.name || 'unknown');
  const desc = escHtml(tool.description || '');
  const cmd  = escHtml(tool.command || '');
  const color = CATEGORY_COLORS[tool.category] || '#00ff41';

  return `
    <article
      class="tool-card cat-${cat}"
      style="--cat-color:${color};"
      data-index="${index}"
      aria-label="${name} — ${cat}"
    >
      <div class="card-header">
        <div class="tool-name">${name}</div>
        <span class="cat-badge cat-${cat}">${cat}</span>
      </div>
      <p class="tool-desc">${desc}</p>
      <div class="command-block">
        <span class="command-prefix">$</span>
        <span class="command-text" title="${cmd}">${cmd}</span>
        <button
          class="copy-btn"
          data-cmd="${cmd}"
          aria-label="Copy command for ${name}"
          onclick="copyCommand(this)"
        >COPY</button>
      </div>
    </article>
  `;
}

// ─────────────────────────────────────────────
//  FILTER TOOLS (search + category)
// ─────────────────────────────────────────────
function filterTools() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const cat   = document.getElementById('categoryFilter').value;

  // Toggle clear button
  const clearBtn = document.getElementById('clearSearch');
  clearBtn.classList.toggle('visible', query.length > 0);

  const filtered = allTools.filter(tool => {
    const matchesCat  = cat === 'all' || tool.category === cat;
    const matchSearch = !query ||
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query) ||
      tool.command.toLowerCase().includes(query);
    return matchesCat && matchSearch;
  });

  renderTools(filtered);
}

// ─────────────────────────────────────────────
//  COPY COMMAND
// ─────────────────────────────────────────────
function copyCommand(btn) {
  const cmd = btn.getAttribute('data-cmd');
  if (!cmd) return;

  // Try modern clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(cmd)
      .then(() => onCopied(btn, cmd))
      .catch(() => fallbackCopy(cmd, btn));
  } else {
    fallbackCopy(cmd, btn);
  }
}

function fallbackCopy(text, btn) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    onCopied(btn, text);
  } catch {
    showToast('Copy failed — try manually selecting the command.', true);
  }
}

function onCopied(btn, cmd) {
  // Button feedback
  const original = btn.textContent;
  btn.textContent = '✓ OK';
  btn.classList.add('copied');
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove('copied');
    btn.disabled = false;
  }, 2000);

  // Toast
  const shortCmd = cmd.length > 42 ? cmd.slice(0, 42) + '…' : cmd;
  showToast(`Copied: ${shortCmd}`);
}

// ─────────────────────────────────────────────
//  TOAST NOTIFICATION
// ─────────────────────────────────────────────
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  const msg   = document.getElementById('toastMsg');

  msg.textContent = message;
  toast.style.borderColor = isError ? '#ff3a3a' : 'var(--green)';
  toast.style.color = isError ? '#ff3a3a' : 'var(--green)';
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─────────────────────────────────────────────
//  ERROR STATE
// ─────────────────────────────────────────────
function showLoadError() {
  document.getElementById('toolGrid').innerHTML = `
    <div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:#ff3a3a;">
      <div style="font-size:48px;margin-bottom:16px;">⊘</div>
      <p style="letter-spacing:2px;margin-bottom:8px;">Failed to load tools.json</p>
      <p style="color:#5a5a5a;font-size:12px;">
        Make sure tools.json is in the same directory as index.html.<br>
        If running locally, use a local server (e.g. <code>python -m http.server</code>).
      </p>
    </div>
  `;
  document.getElementById('shownCount').textContent = '0';
}

// ─────────────────────────────────────────────
//  BIND EVENTS
// ─────────────────────────────────────────────
function bindEvents() {
  // Search — debounced for performance
  let searchDebounce;
  document.getElementById('searchInput').addEventListener('input', () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(filterTools, 80);
  });

  // Category dropdown
  document.getElementById('categoryFilter').addEventListener('change', filterTools);

  // Clear search button
  document.getElementById('clearSearch').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').classList.remove('visible');
    filterTools();
    document.getElementById('searchInput').focus();
  });

  // Keyboard shortcut: Ctrl/Cmd + K → focus search
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('searchInput').focus();
      document.getElementById('searchInput').select();
    }
    // Escape → clear search
    if (e.key === 'Escape') {
      const inp = document.getElementById('searchInput');
      if (inp === document.activeElement && inp.value) {
        inp.value = '';
        filterTools();
      }
    }
  });
}

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ─────────────────────────────────────────────
//  BOOT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
