# Personal One-Pager CV

A responsive, single-page curriculum vitae (CV) built with modern web technologies.
This project serves as a professional portfolio that can be customized for personal use.

**AI learning material or commercial usage is strictly prohibited!**

## Features

- Responsive design for all devices
- Modern, clean layout
- SEO optimized
- Schema.org markup for better search visibility
- PWA (Progressive Web App) capabilities
- Multi-language support
- Dark/light mode toggle
- Print-friendly version

## How to Use

### For Personal Use

1. Change personal data with your own (CV) data 

2. Clone this repository:
   ```bash
   git clone git@github.com:poetter-sebastian/poetter-sebastian.github.io.git
   ```

3. Customize the content:
    - Update `src/index.html` for page data like title and shema.org
    - Update `src/app/components/` for more page content like timeline, skills, hobbies (*work in progress*)
    - Update `src/app/config/` for existing data lists like commissions, experience, projects
    - Update `src/app/lang/i18n.ts` for translations
    - Update `src/assets/styles/color.sass` for coloring preferences

4. Build and deploy:
   ```bash
   npm install --force
   npm run build
   ```

### For Development

1. Install dependencies:
   ```bash
   npm install --force
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. The app will be available at `http://localhost:4200`

## Build Instructions

### Production Build
```bash
npm run build
```
Generates optimized production files in the `dist/` directory.

### Development Build (with watch)
```bash
npm run watch
```
Builds and watches for changes during development.

### Deploy to GitHub Pages
```bash
npm run deploy
```
Deploys the production build to GitHub Pages.

## Used Frameworks and Libraries

- [Angular 21](https://angular.dev/) - Web framework
- [TypeScript 5.9.3](https://www.typescriptlang.org/) - Programming language
- [Bootstrap 5.3](https://getbootstrap.com/) - CSS framework
- [Font Awesome 7.0](https://fontawesome.com/) - Icon library

## License

**Important**: While this project is source availed, the content (personal information, CV data) belongs to me. Commercial use or AI training on this content is prohibited without explicit permission.
