<h1 align="center">Persönlicher Lebenslauf als One-Pager</h1>

<p align="center">
    <a href="https://github.com/poetter-sebastian/poetter-sebastian.github.io/actions/workflows/test-build.yml" title="Deployed" target="_blank"><img alt="GH Action Tests" src="https://github.com/poetter-sebastian/poetter-sebastian.github.io/actions/workflows/test-build.yml/badge.svg"></a>
    <a href="https://github.com/poetter-sebastian/poetter-sebastian.github.io/actions/workflows/build-deploy.yml" title="Deployed" target="_blank"><img alt="GH Action Deployed" src="https://github.com/poetter-sebastian/poetter-sebastian.github.io/actions/workflows/build-deploy.yml/badge.svg"></a>
</p>

<p align="center">
    <a href="https://github.com/poetter-sebastian/poetter-sebastian.github.io" title="English Readme" target="_blank"></a>
    <a href="https://github.com/poetter-sebastian/poetter-sebastian.github.io/blob/main/README.fr.md" title="French Readme" target="_blank"></a>
</p>

Ein responsiver, einseitiger Lebenslauf (CV), der mit modernen Webtechnologien erstellt wurde.
Dieses Projekt dient als professionelles Portfolio, das für den persönlichen Gebrauch angepasst werden kann.

**Die Verwendung als KI-Lernmaterial oder für kommerzielle Zwecke ist strengstens untersagt!**

## Funktionen

- Responsives Design für alle Geräte
- Modernes, übersichtliches Layout
- SEO-optimiert
- Schema.org-Markup für bessere Sichtbarkeit in Suchmaschinen
- PWA-Funktionen (Progressive Web App)
- Mehrsprachige Unterstützung
- Umschaltung zwischen Dunkel- und Hellmodus
- Druckfreundliche Version

## Verwendung

### Für den persönlichen Gebrauch

1. Ändern Sie die persönlichen Daten durch Ihre eigenen (Lebenslauf-)Daten.

2. Klonen Sie dieses Repository:
```bash
git clone git@github.com:poetter-sebastian/poetter-sebastian.github.io.git
```
3. Passen Sie den Inhalt an:
   - Aktualisieren Sie `src/index.html` für Seitendaten wie Titel und shema.org
   - Aktualisieren Sie `src/app/components/` für weitere Seiteninhalte wie Zeitleiste, Fähigkeiten, Hobbys (*in Arbeit*)
   - Aktualisieren Sie `src/app/config/` für vorhandene Datenlisten wie Aufträge, Erfahrungen, Projekte
   - Aktualisieren Sie `src/app/lang/i18n.ts` für Übersetzungen
   - Aktualisieren Sie `src/assets/styles/color.sass` für Farbeinstellungen

4. Erstellung:
```bash
npm install --force
npm run build
```

### Für die Entwicklung

1. Abhängigkeiten installieren:
```bash
npm install --force
```

2. Entwicklungsserver starten:
```bash
npm start
```

3. Die App ist unter `http://localhost:4200` verfügbar.

## Anweisungen zum Erstellen

### Erstellung
```bash
npm run build
```
Erzeugt optimierte Produktionsdateien im Verzeichnis `dist/`.

### Entwicklungs-Build (mit Überwachung)
```bash
npm run watch
```
Erstellt Builds und überwacht Änderungen während der Entwicklung.

### Bereitstellung auf GitHub Pages
```bash
npm run deploy
```
Stellt den Produktions-Build auf GitHub Pages bereit.

## Verwendete Frameworks und Bibliotheken

- [Angular 21](https://angular.dev/) – Web-Framework
- [TypeScript 5.9.3](https://www.typescriptlang.org/) – Programmiersprache
- [Bootstrap 5.3](https://getbootstrap.com/) – CSS-Framework
- [Font Awesome 7.0](https://fontawesome.com/) – Icon-Bibliothek

## Lizenz

**Wichtig**: Obwohl dieses Projekt quellverfügbar ist, gehören die Inhalte (persönliche Informationen, Lebenslaufdaten und ähnliches) mir. Die kommerzielle Nutzung oder das Training von KI mit diesen Inhalten ist ohne ausdrückliche Genehmigung untersagt.
