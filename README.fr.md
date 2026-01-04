<h1 align="center">Personal One-Pager CV</h1>

<p align="center">
    <a href="https://github.com/poetter-sebastian/poetter-sebastian.github.io/actions/workflows/test-build.yml" title="Deployed" target="_blank"><img alt="GH Action Tests" src="https://github.com/poetter-sebastian/poetter-sebastian.github.io/actions/workflows/test-build.yml/badge.svg"></a>
    <a href="https://github.com/poetter-sebastian/poetter-sebastian.github.io/actions/workflows/build-deploy.yml" title="Deployed" target="_blank"><img alt="GH Action Deployed" src="https://github.com/poetter-sebastian/poetter-sebastian.github.io/actions/workflows/build-deploy.yml/badge.svg"></a>
</p>

<p align="center">
    <a href="https://github.com/poetter-sebastian/poetter-sebastian.github.io" title="English Readme" target="_blank"></a>
    <a href="https://github.com/poetter-sebastian/poetter-sebastian.github.io/blob/main/README.de.md" title="German Readme" target="_blank"></a>
</p>

Un CV réactif d'une page, créé à l'aide des technologies web modernes.
Ce projet sert de portfolio professionnel pouvant être personnalisé pour un usage personnel.

**Son utilisation comme support d'apprentissage pour l'IA ou à des fins commerciales est strictement interdite !**

## Fonctionnalités

- Design réactif pour tous les appareils
- Mise en page moderne et claire
- Optimisation pour le référencement
- Balisage Schema.org pour une meilleure visibilité dans les moteurs de recherche
- Fonctionnalités PWA (Progressive Web App)
- Prise en charge multilingue
- Basculement entre le mode sombre et le mode clair
- Version imprimable

## Utilisation

### Pour un usage personnel

1. Remplacez les données personnelles par vos propres données (CV).

2. Clonez ce référentiel :
```bash
git clone git@github.com:poetter-sebastian/poetter-sebastian.github.io.git
```
3. Personnalisez le contenu :
   - Mettez à jour `src/index.html` pour les données de la page telles que le titre et shema.org
   - Mettez à jour `src/app/components/` pour plus de contenu de page tel que la chronologie, les compétences, les loisirs (*en cours*)
   - Mettez à jour `src/app/config/` pour les listes de données existantes telles que les commissions, l'expérience, les projets
   - Mettez à jour `src/app/lang/i18n.ts` pour les traductions
   - Mettez à jour `src/assets/styles/color.sass` pour les préférences de couleurs

4. Compilez et déployez :
```bash
   npm install --force
   npm run build
   ```

### Pour le développement

1. Installez les dépendances :
```bash
npm install --force
```

2. Démarrez le serveur de développement :
```bash
npm start
```

3. L'application sera disponible à l'adresse `http://localhost:4200`

## Instructions de compilation

### Compilation de production
```bash
npm run build
```
Génère des fichiers de production optimisés dans le répertoire `dist/`.

### Compilation de développement (avec surveillance)
```bash
npm run watch
```
Compile et surveille les modifications pendant le développement.

### Déploiement sur GitHub Pages
```bash
npm run deploy
```
Déploie la version de production sur GitHub Pages.

## Frameworks et bibliothèques utilisés

- [Angular 21](https://angular.dev/) - Framework web
- [TypeScript 5.9.3](https://www.typescriptlang.org/) - Langage de programmation
- [Bootstrap 5.3](https://getbootstrap.com/) - Framework CSS
- [Font Awesome 7.0](https://fontawesome.com/) - Bibliothèque d'icônes

## Licence

**Important** : bien que ce projet soit disponible en open source, son contenu (informations personnelles, données de CV) m'appartient. L'utilisation commerciale ou l'entraînement d'IA sur ce contenu est interdit sans autorisation explicite.
