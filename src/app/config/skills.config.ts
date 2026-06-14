import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
    faKeyboard,
    faPaintBrush,
    faFilm,
    faFileAlt,
    faUsers,
    faMicrochip,
    faUsersCog,
    faServer,
    faProjectDiagram,
    faChartDiagram
} from '@fortawesome/free-solid-svg-icons';
import {faFirefoxBrowser, faUbuntu} from '@fortawesome/free-brands-svg-icons';

export interface SkillConfig {
    icon: IconDefinition;
    iconClass?: string;
    text: string;
    i18nPrefix?: string;
}

export const SKILLS_CONFIG: SkillConfig[] = [
    {
        icon: faKeyboard,
        iconClass: 'me-1',
        text: '<a href="https://learn.microsoft.com/cpp" target="_blank" rel="noreferrer">C++ (C)</a>, <a href="https://learn.microsoft.com/dotnet/csharp" target="_blank" rel="noreferrer">C# (.NETcore)</a>, <a href="https://openjdk.org" target="_blank" rel="noreferrer">Java 20</a>, <a href="https://www.python.org" target="_blank" rel="noreferrer">Python 3</a>, <a href="https://www.haskell.org" target="_blank" rel="noreferrer">Haskell</a>, <a href="https://go.dev" target="_blank" rel="noreferrer">Go 1.2</a>, <a href="https://www.php.net" target="_blank" rel="noreferrer">PHP 8.3</a>, SQL, NoSQL, <a href="https://www.rust-lang.org" target="_blank" rel="noreferrer">Rust</a>'
    },
    {
        icon: faFirefoxBrowser,
        text: 'HTML 5, CSS 3, <a href="https://sass-lang.com" target="_blank" rel="noreferrer">SASS</a>, <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">Typescript</a>, <a href="https://jquery.com" target="_blank" rel="noreferrer">Jquery 3.6</a>, <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">Bootstrap 5</a>, <a href="https://webpack.js.org" target="_blank" rel="noreferrer">Webpack</a>, <a href="https://developer.mozilla.org/en-US/docs/Glossary/SEO" target="_blank" rel="noreferrer">SEO</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/Performance" target="_blank" rel="noreferrer">WPO</a>'
    },
    {
        icon: faPaintBrush,
        iconClass: 'me-1',
        i18nPrefix: 'skills-gfx',
        text: '<a href="https://www.gimp.org" target="_blank" rel="noreferrer">GIMP</a>, <a href="https://inkscape.org" target="_blank" rel="noreferrer">Inkscape</a>, <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noreferrer">Photoshop</a>'
    },
    {
        icon: faFilm,
        iconClass: 'me-1',
        i18nPrefix: 'skills-3d',
        text: '<a href="https://www.adobe.com/products/aftereffects.html" target="_blank" rel="noreferrer">After Effects</a>, <a href="https://www.vegascreativesoftware.com/int/vegas-pro" target="_blank" rel="noreferrer">Vegas Pro</a>, <a href="https://www.blender.org" target="_blank" rel="noreferrer">Blender</a>, <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank" rel="noreferrer">Davinci Resolve</a>'
    },
    {
        icon: faFileAlt,
        iconClass: 'me-1',
        i18nPrefix: 'skills-web',
        text: '<a href="https://wordpress.com" target="_blank" rel="noreferrer">WordPress</a> (<a href="https://wpbakery.com" target="_blank" rel="noreferrer">WP-Bakery</a>, <a href="https://elementor.com" target="_blank" rel="noreferrer">Elementor</a>), <a href="https://cakephp.org" target="_blank" rel="noreferrer">Cakephp 5</a>, <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a>, <a href="https://angular.io" target="_blank" rel="noreferrer">Angular</a>, <a href="https://vite.dev" target="_blank" rel="noreferrer">Vite</a>, <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue</a>, <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJS</a>'
    },
    {
        icon: faUsers,
        iconClass: 'me-1',
        i18nPrefix: 'skills-team',
        text: ', <a href="https://www.scrum.org/resources/what-is-scrum" target="_blank" rel="noreferrer">SCRUM</a>, Kanban, Requirement Engineering'
    },
    {
        icon: faMicrochip,
        iconClass: 'me-1',
        i18nPrefix: 'skills-circuit',
        text: ''
    },
    {
        icon: faUbuntu,
        text: 'Windows 7-11, Linux (<a href="https://linuxmint.com" target="_blank" rel="noreferrer">Linuxmint</a>, <a href="https://ubuntu.com/"  target="_blank" rel="noreferrer">Ubuntu</a>, <a href="https://www.raspberrypi.com/software/" target="_blank" rel="noreferrer">Raspberry Pi OS</a>)'
    },
    {
        icon: faServer,
        iconClass: 'me-1',
        text: '<a href="https://godotengine.org" target="_blank" rel="noreferrer">Godot-Engine 4.4</a>, <a href="https://unity.com" target="_blank" rel="noreferrer">Unity 6</a>, <a href="https://www.unrealengine.com" target="_blank" rel="noreferrer">Unreal-Engine 5</a>'
    },
    {
        icon: faUsersCog,
        iconClass: 'me-1',
        text: '<a href="https://git-scm.com" target="_blank" rel="noreferrer">Git</a>, <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noreferrer">Jira</a>, <a href="https://nvie.com/posts/a-successful-git-branching-model" target="_blank" rel="noreferrer">Git-Flow</a>, <a href="https://docs.gitlab.com/ee/topics/gitlab_flow.html" target="_blank" rel="noreferrer">Gitlab-Flow</a>, <a href="https://www.jetbrains.com/youtrack" target="_blank" rel="noreferrer">YouTrack</a>, <a href="https://trello.com/" target="_blank" rel="noreferrer">Trello</a>'
    },
    {
        icon: faServer,
        iconClass: 'me-1',
        text: '<a href="https://www.docker.com" target="_blank" rel="noreferrer">Docker</a>, <a href="https://www.portainer.io" target="_blank" rel="noreferrer">Portainer</a>, <a href="https://kubernetes.io" target="_blank" rel="noreferrer">Kubernetes</a>, <a href="https://docs.github.com/en/actions" target="_blank" rel="noreferrer">Github CI/CD - Actions</a>, <a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="noreferrer">Gitlab CI/CD</a>'
    },
    {
        icon: faProjectDiagram,
        iconClass: 'me-1',
        text: 'Machine learning, Fine-Tuning, Prompt Engineering, Vector based prompt enhancing, <a href="https://pytorch.org" target="_blank" rel="noreferrer">Pytorch</a>, <a href="https://learn.microsoft.com/dotnet/machine-learning/" target="_blank" rel="noreferrer">ML.NET</a>, <a href="https://www.langchain.com/" target="_blank" rel="noreferrer">LangChain</a>,  <a href="https://jupyter.org/" target="_blank" rel="noreferrer">Jupyter</a>'
    },
    {
        icon: faChartDiagram,
        iconClass: 'me-1',
        text: '<a href="https://github.com/ultralytics/ultralytics" target="_blank" rel="noreferrer">YoloV11</a>, <a href="https://stablediffusionweb.com/StableDiffusionXL" target="_blank" rel="noreferrer">Stable Diffusion</a>, <a href="https://mistral.ai/" target="_blank" rel="noreferrer">Mistral</a>, <a href="https://www.deepseek.com/" target="_blank" rel="noreferrer">DeepSeek</a>, <a href="https://www.sbert.net/" target="_blank" rel="noreferrer">all-MiniLM-L6-v2</a>, <a href="https://github.com/openai/whisper" target="_blank" rel="noreferrer">Whisper</a>, <a href="https://ai.meta.com/research/no-language-left-behind/?_fb_noscript=1" target="_blank" rel="noreferrer">nllb-200</a>, <a href="https://github.com/facebookresearch/fairseq/tree/main/examples/m2m_100" target="_blank" rel="noreferrer">M2M100</a>, ...'
    }
];
