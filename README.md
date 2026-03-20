# ⬡ HYDRA TERMUX TOOL HUB

<div align="center">

![HYDRA TERMUX](https://img.shields.io/badge/HYDRA-TERMUX-00ff41?style=for-the-badge&labelColor=050a05&color=00ff41)
![Tools](https://img.shields.io/badge/TOOLS-145%2B-00f0ff?style=for-the-badge&labelColor=050a05)
![No Root](https://img.shields.io/badge/NO%20ROOT-REQUIRED-ffe600?style=for-the-badge&labelColor=050a05)
![Android](https://img.shields.io/badge/ANDROID-READY-bf5fff?style=for-the-badge&labelColor=050a05)
![License](https://img.shields.io/badge/LICENSE-MIT-00ff41?style=for-the-badge&labelColor=050a05)

**A professional hacker-style toolkit dashboard listing 145+ Termux tools for Android.**  
*No backend · No root · Fully client-side · GitHub Pages ready*

🌐 **Live Demo:** [your-username.github.io/hydra-termux-tool-hub](https://your-username.github.io/hydra-termux-tool-hub)  
📖 **Blog:** [hydratermux.blogspot.com](https://hydratermux.blogspot.com)

</div>

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────┐
│  ⬡ HYDRA  TERMUX TOOL HUB          [145 TOOLS] [●]  │
│  // Android Cybersecurity Toolkit — No Root Required │
├─────────────────────────────────────────────────────┤
│                                                      │
│              ╔═══════════════╗                       │
│              ║   TOOL HUB   ║  ← Glitch animation   │
│              ╚═══════════════╝                       │
│                                                      │
│  [⌕ Search tools...]  [// ALL CATEGORIES ▾]         │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │  nmap    │  │  hydra   │  │  sqlmap  │           │
│  │ Network  │  │ Password │  │ Exploit  │           │
│  │ Scanner  │  │ Cracker  │  │ SQLi     │           │
│  │ $ pkg... │  │ $ pkg... │  │ $ pip... │           │
│  │  [COPY]  │  │  [COPY]  │  │  [COPY]  │           │
│  └──────────┘  └──────────┘  └──────────┘           │
└─────────────────────────────────────────────────────┘
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🔍 **Real-time Search** | Filter by name, description, category, or command instantly |
| 🏷️ **Category Filter** | 8 categories with color-coded neon badges |
| 📋 **Copy to Clipboard** | One-click copy with fallback for older Android browsers |
| 🎨 **Hacker Dark UI** | Scanlines, glitch effect, per-category neon glow |
| 📱 **Mobile Responsive** | Optimized for Android phones — the primary audience |
| ⚡ **Fully Client-Side** | No server, no database, no dependencies |
| ⌨️ **Keyboard Shortcuts** | `Ctrl+K` to focus search, `Escape` to clear |
| 🚀 **GitHub Pages Ready** | Upload 4 files and go live instantly |

---

## 📁 Repository Structure

```
hydra-termux-tool-hub/
│
├── index.html          # Main HTML — structure and layout
├── style.css           # Full dark UI — neon glow, animations, responsive
├── script.js           # JS logic — fetch, filter, search, copy, toast
├── tools.json          # 145+ tools database (name, category, desc, command)
│
├── README.md           # This file
├── LICENSE             # MIT License
└── .github/
    └── FUNDING.yml     # Optional — GitHub Sponsors config
```

---

## 🗂️ Tool Categories

| Category | Color | Count | Description |
|---|---|---|---|
| 🔵 **Recon** | Cyan `#00f0ff` | 18 | Subdomain enum, web crawling, fingerprinting |
| 🔴 **Exploitation** | Red `#ff3a3a` | 16 | Web vulns, reverse engineering, fuzzing |
| 🟡 **Password** | Yellow `#ffe600` | 8 | Cracking, brute-force, wordlists |
| 🟣 **OSINT** | Purple `#bf5fff` | 13 | Username search, email recon, metadata |
| 🔷 **Network** | Light Cyan | 15 | Scanning, sniffing, VPN, proxies |
| 🟠 **System** | Orange `#ff9500` | 19 | Shell, distros, process management |
| 🟢 **Dev** | Green `#00ff41` | 23 | Languages, databases, servers |
| ⬜ **Utility** | Pale Green | 33 | Editors, converters, downloaders |

---

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Method 1 — Upload via GitHub Website

1. Go to [github.com](https://github.com) and log in
2. Click **New repository**
3. Name it: `hydra-termux-tool-hub`
4. Set it to **Public**
5. Click **Create repository**
6. Click **uploading an existing file**
7. Drag and drop all 4 files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `tools.json`
8. Click **Commit changes**
9. Go to **Settings → Pages**
10. Under **Source**, select `Deploy from a branch`
11. Select `main` branch, `/ (root)` folder
12. Click **Save**
13. Wait ~60 seconds → your site is live at:
    ```
    https://your-username.github.io/hydra-termux-tool-hub
    ```

### Method 2 — Clone and Push via Git

```bash
# Clone your new empty repo
git clone https://github.com/your-username/hydra-termux-tool-hub.git
cd hydra-termux-tool-hub

# Copy the 4 files into this folder
# (index.html, style.css, script.js, tools.json)

# Add, commit, push
git add .
git commit -m "🚀 Initial release — HYDRA TERMUX TOOL HUB"
git push origin main
```

Then enable GitHub Pages in Settings as described above.

### Method 3 — Deploy via Termux (on your Android!)

```bash
# Install git in Termux
pkg install git -y

# Configure git
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Clone your repo
git clone https://github.com/your-username/hydra-termux-tool-hub.git
cd hydra-termux-tool-hub

# Copy files (assuming you downloaded them to storage)
cp ~/storage/downloads/index.html .
cp ~/storage/downloads/style.css .
cp ~/storage/downloads/script.js .
cp ~/storage/downloads/tools.json .

# Push
git add .
git commit -m "🚀 Deployed from Termux"
git push origin main
```

---

## 🧪 Test Locally Before Deploying

> ⚠️ You **cannot** open `index.html` directly in a browser — `fetch('tools.json')` requires HTTP. Use a local server:

```bash
# Python (recommended)
python3 -m http.server 8080
# Open: http://localhost:8080

# Node.js
npx serve .
# Open: http://localhost:3000

# PHP
php -S localhost:8080
# Open: http://localhost:8080
```

**In Termux:**
```bash
pkg install python -y
cd ~/hydra-termux-tool-hub
python -m http.server 8080
# Open your Android browser → http://127.0.0.1:8080
```

---

## ➕ How to Add More Tools

Open `tools.json` and add entries following this structure:

```json
{
  "name": "toolname",
  "category": "Network",
  "description": "What this tool does in one sentence.",
  "command": "pkg install toolname -y"
}
```

**Valid categories:** `Recon` · `Exploitation` · `Password` · `OSINT` · `Network` · `System` · `Dev` · `Utility`

**Example entries:**

```json
[
  {
    "name": "nmap",
    "category": "Network",
    "description": "Powerful network scanner for host discovery and port scanning.",
    "command": "pkg install nmap -y"
  },
  {
    "name": "sherlock",
    "category": "OSINT",
    "description": "Hunt down social media accounts by username across platforms.",
    "command": "git clone https://github.com/sherlock-project/sherlock"
  }
]
```

Save the file, commit, and push — the site updates automatically.

---

## 🎨 Customization

### Change the Blog URL

In `index.html`, find and replace all occurrences of:
```
https://hydratermux.blogspot.com
```
with your own URL.

### Change Colors

In `style.css`, edit the CSS variables at the top:
```css
:root {
  --green:  #00ff41;   /* Primary neon green */
  --cyan:   #00f0ff;   /* Secondary cyan */
  --yellow: #ffe600;   /* Password category */
  --red:    #ff3a3a;   /* Exploitation category */
  --purple: #bf5fff;   /* OSINT category */
}
```

### Disable Scanlines

In `style.css`, find `.scanlines` and set:
```css
.scanlines { display: none; }
```

### Change the Site Title

In `index.html`, edit the `<title>` tag and `.logo-main` text.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Dark UI, animations, CSS variables, Grid layout |
| **Vanilla JavaScript** | Fetch, filter, search, clipboard API |
| **JSON** | Tools database (no backend needed) |
| **Google Fonts** | Orbitron (display) + Share Tech Mono (body) |

**Zero dependencies** — no npm, no build step, no frameworks. Just 4 files.

---

## ⚠️ Disclaimer

> This project is for **educational purposes only**. All tools listed are publicly available open-source software. Always practice on systems you own or have explicit permission to test. HYDRA TERMUX does not support or encourage illegal activity of any kind.

---

## 📄 License

```
MIT License

Copyright (c) 2026 Rixon Xavier — HYDRA TERMUX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

---

## 👤 Author

**Rixon Xavier**  
Founder — HYDRA TERMUX  
Cybersecurity educator and Termux enthusiast since 2023.

📖 Blog: [hydratermux.blogspot.com](https://hydratermux.blogspot.com)  
⭐ If this project helped you, consider starring the repo!

---

<div align="center">

**⬡ HYDRA TERMUX © 2026 · Rixon Xavier · Educational Use Only**

</div>
