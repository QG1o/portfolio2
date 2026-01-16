# Portfolio - QG1o

Ein modernes, interaktives Portfolio mit beeindruckenden Animationen und Custom UI-Elementen.

**IT-Administrator • Security Enthusiast**

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

### Design & Visuals
- 🌙 **Dark/Light Mode** mit animiertem Übergang
- 🎨 **Sanfte Farbpalette** - Gedämpfte Pastellfarben für Augenfreundlichkeit
- 🌈 **Rainbow Hover Effects** - Sanfte Pastell-Animationen statt greller Neons
- 📐 **Gradient Backgrounds** - Dynamische Verläufe für mehr Tiefe
- 💎 **Soft Shadows** - Mehrschichtige Schatten mit Farb-Glows
- 📱 **Fully Responsive** - Optimiert für Mobile, Tablet und Desktop

### Interactive Elements
- 🌈 **Custom Cursor System** (Desktop):
  - Triple-Effect: Dot + Ring + Glow + Rainbow Trail
  - **Rainbow Trail**: Lebendiger Regenbogen-Schweif folgt dem Cursor
  - 12 Trail-Punkte mit individuellen Regenbogenfarben
  - Längere Sichtbarkeit (200ms) für besseren Effekt
  - Smart Hover-Interaktion (Cursor vergrößert sich)
  - 60fps Performance mit requestAnimationFrame
  - Auto-disable auf Mobile/Touch

- 🌀 **Loading Screen**:
  - Animiertes Logo mit rotierenden Ringen
  - Progress Bar mit Shimmer-Effekt
  - Float & Pulse Animationen
  - Smooth 2-Sekunden Fade-Out

- 💫 **Enhanced Theme Transition**:
  - **Spiral Wipe Animation**: Rotierender Farbwirbel-Effekt
  - Conic-Gradient basiert für einzigartigen Look
  - Origin-basiert vom Toggle-Button
  - GPU-accelerated für 60fps
  - 800ms smooth cubic-bezier Easing mit 360° Rotation

### UI Components
- ✨ **Enhanced Icons**:
  - Theme-Toggle (Sonne/Mond): 45px groß mit starkem Drop-Shadow
  - 50% Scale + 25° Rotation beim Hover
  - Brightness-Boost (1.4x) für bessere Sichtbarkeit
- 🔘 **Animated Buttons** - Elevation-Changes mit farbigen Schatten
- 📊 **Typography Hierarchy** - Klare Font-Weight-Abstufungen
- 🎯 **Smooth Transitions** - Alle Elemente mit cubic-bezier Easing

### Performance
- ⚡ **60fps Animations** - GPU-Accelerated mit will-change
- 🚀 **Optimized Rendering** - requestAnimationFrame für Cursor
- 🧹 **Smart Cleanup** - Automatisches Trail-Management
- 📦 **Vite Build System** - Lightning-fast HMR

## 🛠️ Tech Stack

- **React** - UI Framework
- **Vite** - Build Tool & Dev Server
- **CSS Modules** - Scoped Styling
- **Modern CSS**:
  - CSS Custom Properties (CSS Variables)
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - CSS Filters & Blend Modes
  - GPU-Accelerated Transforms

## 🎨 Farbpalette

### Light Mode
- **Background Gradient** (4 Stops für sichtbaren Verlauf):
  - Start: #b8d4f7 (Helles Blau)
  - 30%: #d5e5f2 (Sehr helles Blau)
  - 70%: #e8d5f2 (Rosa-Violett)
  - Ende: #c8b8ea (Weiches Lila)
- **Primary**: #9b7fd4 (Weiches Lila)
- **Text**: #2d2d2d (Dunkles Grau)

### Dark Mode
- **Background Gradient** (4 Stops für sichtbaren Verlauf):
  - Start: #1a1828 (Sehr dunkel)
  - 30%: #2d2b3e (Dunkel Violett)
  - 70%: #3d3b52 (Medium Violett)
  - Ende: #524a5e (Heller Violett)
- **Primary**: #b8d4f7 (Helles Blau)
- **Text**: #f0f0f0 (Helles Grau)

### Rainbow Trail Colors (Cursor)
- Pink: #ff006e
- Orange: #fb5607
- Yellow: #ffbe0b
- Mint: #06ffa5
- Blue: #3a86ff
- Purple: #8338ec

### Accent Colors (Hover Effects)
- Soft Pink: #f4a5c5
- Lavender: #b8a4ea
- Light Blue: #a4c8f4
- Mint: #a4f4d4
- Cream: #f4e4a4
- Peach: #f4c4a4

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Browser (iOS Safari, Chrome Mobile)

**Note**: Custom Cursor ist nur auf Desktop-Geräten mit Maus aktiviert