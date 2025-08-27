# Portfolio2 – React/Vite Portfolio

Eine einfache Portfolio-Website mit React und Vite.

## Voraussetzungen

- Node.js LTS (empfohlen) und npm

## Installation

```bash
npm install
```

## Entwicklung starten

```bash
npm run dev
```

Der Dev-Server läuft anschließend lokal (Vite zeigt die URL im Terminal an).

## Produktionsbuild erstellen

```bash
npm run build
```

Das optimierte Build-Ergebnis liegt danach im Ordner `dist/`.

## Deployment auf GitHub Pages

Diese App ist mit Vite konfiguriert, unter dem Repository-Namen `portfolio2` zu laufen.

- Prüfen Sie in `vite.config.js`, dass der `base`-Pfad korrekt ist:
  ```js
  export default defineConfig({
    base: '/portfolio2/',
    plugins: [react()],
  })
  ```

### Variante A: Manuell über GitHub Pages (ohne zusätzliche Tools)

1. Build erstellen: `npm run build`
2. Den Inhalt von `dist/` auf einen Branch veröffentlichen, der für Pages genutzt wird (z. B. `gh-pages`).
3. In GitHub → Repository → Settings → Pages den Branch (z. B. `gh-pages`) als Source auswählen.

Tipp: Sie können das Veröffentlichen des `dist/`-Ordners z. B. mit einer Action automatisieren oder lokal per Git Subtree/Scripts erledigen.

### Variante B: Mit gh-pages-Paket (optional)

Falls Sie das npm-Paket `gh-pages` verwenden möchten, fügen Sie ein Deploy-Script hinzu und veröffentlichen Sie den Ordner `dist/`. Beispiel:

```json
{
  "dev": "vite",
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}
```

Anschließend:

```bash
npm run build
npm run deploy
```

## Hinweise zu Assets und Pfaden

- Dateien im Ordner `public/` werden beim Build an die Wurzel des Deployments kopiert.
- Beim Deployment unter `/portfolio2/` sollten Sie Asset-Links so referenzieren, dass sie mit dem eingestellten `base` funktionieren. Bewährt sind relative Pfade (z. B. `favicon.ico`) oder Pfade, die den `base` berücksichtigen (z. B. `/portfolio2/favicon.ico`).

## Client-Side Routing (optional)

Wenn Sie später Client-Side Routing (SPA) verwenden, benötigt GitHub Pages eine `404.html`, die auf `index.html` zurückleitet ("SPA GitHub Pages"-Ansatz), damit Deep-Links funktionieren.

## Tech-Stack

- React
- Vite
- CSS Modules