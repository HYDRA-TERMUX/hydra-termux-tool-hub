# Contributing to HYDRA TERMUX TOOL HUB

Thank you for wanting to contribute! This project is open to everyone in the Termux and Android cybersecurity education community.

---

## 📋 Ways to Contribute

### 1. Add a New Tool

Edit `tools.json` and add your tool following this exact format:

```json
{
  "name": "toolname",
  "category": "Network",
  "description": "One clear sentence describing what this tool does.",
  "command": "pkg install toolname -y"
}
```

**Rules:**
- `name` — lowercase, no spaces (use the actual package name)
- `category` — must be one of: `Recon`, `Exploitation`, `Password`, `OSINT`, `Network`, `System`, `Dev`, `Utility`
- `description` — one sentence, beginner-friendly, no markdown
- `command` — the exact command a user types in Termux (tested and working)

### 2. Fix a Wrong Command

If a tool's install command is outdated or wrong, open a **Bug Report** issue or submit a Pull Request with the corrected `tools.json` entry.

### 3. Improve the UI

Found a layout bug? Mobile issue? Animation glitch? Open a Pull Request with your fix in `style.css` or `script.js`.

### 4. Improve the README

Typos, unclear steps, missing info — all welcome.

---

## 🔀 Pull Request Process

1. **Fork** this repository
2. Create a branch: `git checkout -b add-tool-nameofool`
3. Make your changes
4. Test locally: `python3 -m http.server 8080`
5. Commit with a clear message:
   ```
   git commit -m "Add toolname to Network category"
   ```
6. Push: `git push origin add-tool-nametool`
7. Open a Pull Request — describe what you added/changed

---

## ✅ Checklist Before Submitting

- [ ] JSON is valid (no trailing commas, correct quotes)
- [ ] Category is one of the 8 valid options
- [ ] Install command has been tested in Termux
- [ ] Description is clear and one sentence
- [ ] No duplicate tool names

---

## ⚠️ What NOT to Contribute

- Tools that are illegal, malicious, or have no legitimate educational use
- Fake or untested commands
- Scraped/copied content without verification
- Promotional or spam content

---

## 🧪 Validate Your JSON

Before submitting, validate your `tools.json` is still valid:

```bash
python3 -c "import json; json.load(open('tools.json')); print('JSON is valid ✓')"
```

---

Thank you for helping make HYDRA TERMUX TOOL HUB better for everyone!

**— Rixon Xavier | hydratermux.blogspot.com**
