# Portfolio - Georgios Tertlidis

IT-Administrator • Security Enthusiast

## 🚀 Deployment auf GitHub Pages

### Automatisches Deploy:
```bash
npm run deploy
```

### Manuelles Deploy:
1. Build erstellen:
```bash
npm run build
```

2. Mit GitHub Desktop:
   - Änderungen committen
   - Auf `gh-pages` Branch pushen (NICHT main!)

### Wichtige Hinweise:
- **Nur auf `gh-pages` Branch deployen!** 
- Main Branch verursacht White Screen
- GitHub Pages Settings: Source = `gh-pages` Branch
- URL: `https://[username].github.io/portfolio2/`

## 🛠️ Lokale Entwicklung

```bash
npm install
npm run dev
```

## 📁 Projektstruktur

- `src/sections/` - Website Sektionen
- `src/common/` - Gemeinsame Komponenten
- `src/assets/` - Bilder und Icons
- `public/` - Statische Dateien

## 🎨 Features

- 🌙 Dark/Light Mode Toggle
- 🌈 Rainbow Hover Effects
- 📱 Responsive Design
- ⚡ Vite Build System