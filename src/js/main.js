$(document).ready(function() {
    if(bl !== 'en'){
        changeLang(bl);
    }
    $('.year').each(function() {
        this.innerText = new Date().getFullYear();
    });

    const btn = document.querySelector(".btn-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = localStorage.getItem("theme") ?? undefined;

    if ((prefersDarkScheme && currentTheme === undefined) || currentTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else if (currentTheme === "light") {
        document.body.classList.add("light-theme");
    }

    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
        let theme
        if (prefersDarkScheme) {
            theme = document.body.classList.contains("light-theme")
                ? "light"
                : "dark";
        } else {
            theme = document.body.classList.contains("dark-theme")
                ? "dark"
                : "light";
        }
        localStorage.setItem("theme", theme);
    });
});

let langJson = {
    "en": {
        "page-title":"Curriculum-vitae of Sebastian Poetter",
        "owner-name":"SEBASTIAN POETTER",
        "owner-job-name":"FULL STACK DEVELOPER",
        "contact-title":"CONTACT",
        "contact-email":"<span class=\"d-none\"><a href=\"mailto:email@domain.com\"></a>email@domain.com</span>\n" +
            "<a href=\"&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x73;&#x65;&#x62;&#x61;&#x73;&#x74;&#x69;&#x61;&#x6e;&#x2e;&#x70;&#x6f;&#x65;&#x74;&#x74;&#x65;&#x72;%2D%64%65%76%40%67%6D%78%2E%64%65%20\">Send me a mail</a>",
        "contact-github":"Find me on Github",
        "contact-linkedin":"Find me on LinkedIn",
        "hobbies-title":"HOBBIES",
        "hobbies-programming":"Programming",
        "hobbies-swimming":"Swimming",
        "hobbies-hiking":"Hiking",
        "hobbies-game":"Game Developing",
        "hobbies-planting":"Gardening",
        "hobbies-circuit":"IoT tinkering",
        "hobbies-gaming":"Gaming",
        "hobbies-modeling":"3D Modeling",
        "skills-title":"SKILLS",
        "skills-gfx":"Image editing e.g. with ",
        "skills-3d":"Animations e.g. with ",
        "skills-web":"Knowledge of ",
        "skills-team":"Team leading and Project organisation",
        "skills-circuit":"Knowledge of electrical engineering e.g. with <a href=\"https://www.arduino.cc/\" target=\"_blank\" rel=\"noreferrer\">Arduino</a> and <a href=\"https://wordpress.com/\" target=\"_blank\" rel=\"noreferrer\">Raspberry Pi</a>",
        "projects-title":"Projects",
        "projects-fan":"Raspberry Pi fan control",
        "projects-notes":"Notes App (PWA)",
        "projects-prio":"Concurrent priority list",
        "projects-weather":"Weather station (IoT)",
        "projects-yolo":"Neural network",
        "projects-table":"Timetable creator",
        "projects-satellite":"Satellite movement visualisation",
        "projects-master":"Simulation of an ecosystem",
        "footer-title":"IMPRINT",
        "footer-copyright":"BY SEBASTIAN POETTER",
        "footer-policy":"PRIVACY POLICY",
        "footer-library":"USED LIBRARIES",
        "profile-title":"PROFILE",
        "profile-begin":"My name is Sebastian Pötter. I am a student at the University of Applied Sciences in Leipzig and currently in the master's program in computer science with a focus on artificial intelligence and software development. I can quickly familiarize myself with new projects and like to solve hard problems.",
        "profile-other":"I am interested in a variety of topics in the field of computer science. But not only computers belong to my interests, but also other topics such as biology, chemistry, physics and electrical engineering.",
        "education-title":"EDUCATION",
        "education-secondary-title":"Secondary school (Realschule)",
        "education-secondary-text":"I graduated from secondary school in 2014. In Germany the Secondary school is called Realschule and leads to either apprenticeships or on my case to higher education comparable to high schools. Here I started getting interested in Computer and started building simple websites as a hobby.",
        "education-high-title":"High School (Abitur)",
        "education-high-text":"I made my higher education entrance qualification with focus on computer science in 2017. During this time I worked on some simple projects and made free website designs. Here I started to work with the game-development engine Unity and made some smaller 3D-applications.",
        "education-bachelor-title":"University: Bachelor of Science",
        "education-bachelor-text":"I started studying informatics with a focus on software technology and programming techniques in 2017. I got way better at programming, algorithm engineering and software planning. After the course 'principles of mobile robotics' I started experimenting with arduino and raspberry pi boards to create hardware like a weather-station for my home-sever.",
        "education-bachelor-subjects":"Some of my subjects were",
        "education-bachelor-subject-ads":"Algorithms and data structures",
        "education-bachelor-math":"Mathematics for computer scientists",
        "education-bachelor-programming":"Application-/system-/parallel oriented programming",
        "education-bachelor-fp":"Functional programming",
        "education-bachelor-afl":"Automata and formal languages",
        "education-bachelor-ai":"Principles of artificial Intelligence",
        "education-bachelor-mr":"Principles of mobile robotics",
        "education-bachelor-th":"My Bachelor thesis: <a href=\"https://nbn-resolving.org/urn:nbn:de:bsz:l189-qucosa2-753784\" rel=\"noreferrer\" target=\"_blank\">Algorithmically Supported Scheduling</a>",
        "education-master-title":"University: Master of Science - 2023",
        "education-master-text":"I want to improve the skills I have learned and want to learn more. So I thought that the master degree is the best way for it.",
        "education-master-subjects":"Some of my chosen subjects were",
        "education-master-3d":"3D Capture, Design and Dynamics",
        "education-master-alg":"Algorithm Engineering",
        "education-master-prog":"Progressive Web Apps",
        "education-master-mr":"Mixed Reality & AI",
        "education-master-visu":"Visualization in NaturalSciences and Engineering",
        "education-master-ivra":"Innovative computer architectures",
        "education-master-cry":"Cryptography",
        "education-master-oagr":"Object and gesture recognition",
        "education-master-th":"My master thesis: <a href=\"https://github.com/poetter-sebastian/Simulation\" rel=\"noreferrer\" target=\"_blank\">Development of an environmental simulation in Unity</a>",
        "experience-title":"EXPERIENCE",
        "experience-small-com":"Multiple commissions of one-page-websites for smaller companies - 2014-2017",
        "experience-landing-page":"Commission of a landing-page for a company in Dresden - 2017",
        "experience-profesco":"Commission of a wordpress-website for the <a href=\"https://www.profesco.de\" rel=\"noreferrer\" target=\"_blank\">Profesco GmbH</a> (creation and administration) - 2019-2021",
        "experience-internship":"Twelve weeks internship at <a href=\"https://www.profesco.de\" rel=\"noreferrer\" target=\"_blank\">Profesco GmbH</a> in the IT department - 2020",
        "experience-lefx":"Reworked and updated the wordpress website of the company <a href=\"https://www.LeFx.de\" rel=\"noreferrer\" target=\"_blank\">LeFx GmbH</a> - 2020-2021",
        "experience-velomotion":"Updated parts of <a href=\"https://www.velomotion.de/\" rel=\"noreferrer\" target=\"_blank\">Velomotion GmbH</a> - 2020",
        "experience-aktiv":"Created a website for the company <a href=\"https://www.aktiv-oase.de/\" rel=\"noreferrer\" target=\"_blank\">EB Gesundheitsstudio GmbH</a> - 2021",
        "experience-sanit":"Revised the homepage of <a href=\"https://san-rosenau.de/Start.html\" rel=\"noreferrer\" target=\"_blank\">Sanitätshaus Rosenau GmbH</a> - 2021",
        "experience-saxony":"Commission of an award-page for <a href=\"https://www.games-innovation-award-saxony.de/\" rel=\"noreferrer\" target=\"_blank\">Games innovation award saxony</a> - 2021",
        "experience-ovrlab":"Improvement of <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a>, <a href=\"https://www.vrbits.de/\" rel=\"noreferrer\" target=\"_blank\">VrBits</a> and <a href=\"https://www.Ovrlab.de/\" rel=\"noreferrer\" target=\"_blank\">Ovrlab</a> - 2022",
        "experience-up-lefx":"Design upgrade of <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a> - 2023",
        "experience-overall":"Eight years of work experience - 2015 until now",
        "commissions-title":"WHO COMMISSIONED ME",
        "modal-close": "Close",
    },
    "de": {
        "page-title":"Homepage von Sebastian Pötter",
        "owner-name":"Sebastian Pötter",
        "owner-job-name":"FULL STACK DEVELOPER",
        "contact-title":"Kontakt",
        "contact-email":"<span class=\"d-none\"><a href=\"mailto:email@domain.com\"></a>email@domain.com</span>\n" +
            "<a href=\"&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x73;&#x65;&#x62;&#x61;&#x73;&#x74;&#x69;&#x61;&#x6e;&#x2e;&#x70;&#x6f;&#x65;&#x74;&#x74;&#x65;&#x72;%2D%64%65%76%40%67%6D%78%2E%64%65%20\">Senden Sie mir eine E-Mail</a>",
        "contact-github":"Meine Github-Seite",
        "contact-linkedin":"LinkedIn",
        "hobbies-title":"Hobbys",
        "hobbies-programming":"Programmieren",
        "hobbies-swimming":"Schwimmen",
        "hobbies-hiking":"Wandern",
        "hobbies-game":"Spiele-Entwicklung",
        "hobbies-planting":"Gärtnern",
        "hobbies-circuit":"IoT-Bastelei",
        "hobbies-gaming":"Computerspielen",
        "hobbies-modeling":"3D Modellierung",
        "skills-title":"Fähigkeiten",
        "skills-gfx":"Bildbearbeitung z.B. mit ",
        "skills-3d":"Animationen z.B. mit ",
        "skills-web":"Kenntnisse von ",
        "skills-team":"Teamleitung und Projektmanagement",
        "skills-circuit":"Kenntnisse in der Elektrotechnik z.B. mit <a href=\"https://www.arduino.cc/\" target=\"_blank\" rel=\"noreferrer\">Arduino</a> und <a href=\"https://wordpress.com/\" target=\"_blank\" rel=\"noreferrer\">Raspberry Pi</a>",
        "projects-title":"Projekte",
        "projects-fan":"Lüftertreiber",
        "projects-notes":"Notizen App (PWA)",
        "projects-prio":"Prioritätswarteschlange",
        "projects-weather":"Wetterstation (IoT)",
        "projects-yolo":"Neuronales Netzwerk",
        "projects-table":"Stundenplan Kalkulation",
        "projects-satellite":"Visualising von Satellitenbewegungen",
        "projects-master":"Simulation eines Ökosystems",
        "footer-title":"Impressum",
        "footer-copyright":"Erstellt von Sebastian Pötter",
        "footer-policy":"Datenschutzerklärung",
        "footer-library":"Benutze Frameworks",
        "profile-title":"Profil",
        "profile-begin":"Mein Name ist Sebastian Pötter. Ich bin Student an der Hochschule für Technik, Wirtschaft und Kultur in Leipzig und aktuell im Masterstudiengang Informatik mit Schwerpunkt in künstlicher Intelligenz und Software-Entwicklung. Ich kann mich schnell in neue Projekte einarbeiten und löse gern hartnäckige Probleme.",
        "profile-other":"Dabei interessiere ich mich für eine vielzahl an Themen im Informatik Bereich. Aber Nicht nur Computer gehören zu meinen Interessen, sondern auch andere Themen, wie Biologie, Chemie, Physik und Elektrotechnik.",
        "education-title":"Bildungsweg",
        "education-secondary-title":"Realschule",
        "education-secondary-text":"2014 habe ich meinen Realschulabschluss gemacht. Danach entschied ich mich, noch das Abitur zu versuchen. In der Realschulzeit fing ich an, mich für Computer zu interessieren und begann, einfache Webseiten zu erstellen.",
        "education-high-title":"Gymnasium",
        "education-high-text":"Ich habe 2017 mein Abitur mit Schwerpunkt auf Informatik absolviert. Während dieser Zeit habe ich an einigen einfachen Projekten gearbeitet und freie Website-Designs erstellt. Hier fing ich an, mit der 3D-Engine Unity zu arbeiten und erstellte einige kleinere 3D-Anwendungen.",
        "education-bachelor-title":"Universität: Bachelor of Science",
        "education-bachelor-text":"2017 habe ich meinen Bachelor in Informatik mit Schwerpunkt auf Softwaretechnik und Programmiertechniken erreicht. Ich wurde viel besser im Programmieren, Algorithm Engineering und Softwareplanung. Nach dem Kurs 'Grundlagen der mobilen Robotik' habe ich angefangen, mit Arduino- und Raspberry-Pi-Boards zu experimentieren, um Hardware z.B. eine Wetterstation für meinen Home-Sever zu bauen.",
        "education-bachelor-subjects":"Einige meiner Fächer waren",
        "education-bachelor-subject-ads":"Algorithmen und Datenstrukturen",
        "education-bachelor-math":"Mathematik für Informatiker",
        "education-bachelor-programming":"Anwendung-/system-/parallel-orientiere Programmierung ",
        "education-bachelor-fp":"Funktionale Programmierung",
        "education-bachelor-afl":"Automaten und formale Sprachen",
        "education-bachelor-ai":"Prinzipien der künstlichen Intelligenz",
        "education-bachelor-mr":"Prinzipien der Mobilen-Robotik",
        "education-bachelor-th":"Meine Bachelorarbeit: <a href=\"https://nbn-resolving.org/urn:nbn:de:bsz:l189-qucosa2-753784\" rel=\"noreferrer\" target=\"_blank\">Algorithmisch Unterstützte Terminplanung</a>",
        "education-master-title":"Universität: Master of Science - 2023",
        "education-master-text":"Ich wollte die Fähigkeiten, die ich gelernt habe, vertiefen und verbessern. Also dachte ich mir, dass der Master Studiengang hierfür der beste Weg ist.",
        "education-master-subjects":"Ein paar meiner gewählten Fächer",
        "education-master-3d":"3D-Erfassung, -Design und -Dynamik",
        "education-master-alg":"Algorithmenentwicklung",
        "education-master-prog":"Progressive Web Apps",
        "education-master-mr":"Mixed Reality & Künstliche Intelligenz",
        "education-master-visu":"Visualisierung in Natur- und Ingenieurwissenschaften",
        "education-master-ivra":"Innovative Rechnerarchitekturen",
        "education-master-cry":" Kryptologie",
        "education-master-oagr":"Objekt- und Gestenerkennung",
        "education-master-th":"Mein Masterarbeitsthema: <a href=\"https://github.com/poetter-sebastian/Simulation\" rel=\"noreferrer\" target=\"_blank\">Entwicklung einer Umweltsimulation in Unity</a>",
        "experience-title":"Erfahrung",
        "experience-small-com":"Beauftragungen von kleineren One-Page-Webseiten für Unternehmen - 2014-2017",
        "experience-landing-page":"Erstellung einer Webseite für ein Unternehmen in Dresden - 2017",
        "experience-profesco":"Beauftragung einer Wordpress-Seite für die <a href=\"https://www.profesco.de/\" rel=\"noreferrer\">Profesco GmbH</a> (Erstellung und Wartung) - 2019-2021",
        "experience-internship":"12 Wochen Praktikum bei <a href=\"https://www.profesco.de/\" rel=\"noreferrer\">Profesco GmbH</a> in der IT-Abteilung - 2020",
        "experience-velomotion":"Aktualisierungen von Funktionalitäten der Webseite <a href=\"https://www.velomotion.de/\" rel=\"noreferrer\">Velomotion GmbH</a> - 2020",
        "experience-lefx":"Überarbeitung und Aktualisierung der Wordpress-Website der <a href=\"https://www.lefx.de/\" rel=\"noreferrer\">LeFx GmbH</a> - 2020-2021",
        "experience-aktiv":"Erstellung einer Website für das Unternehmen <a href=\"https://www.aktiv-oase.de/\" rel=\"noreferrer\" target=\"_blank\">EB Gesundheitsstudio GmbH</a> - 2021",
        "experience-sanit":"Überarbeitung der Homepage der <a href=\"https://san-rosenau.de/Start.html\" rel=\"noreferrer\" target=\"_blank\">Sanitätshaus Rosenau GmbH</a> - 2021",
        "experience-saxony":"Beauftragen zum Erstellen einer Preisseite des <a href=\"https://www.games-innovation-award-saxony.de/\" rel=\"noreferrer\" target=\"_blank\">Games innovation award saxony</a> - 2021",
        "experience-ovrlab": "Überarbeitung der Seiten <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a>, <a href=\"https://www.vrbits.de/\" rel=\"noreferrer\" target=\"_blank\">VrBits</a> und <a href=\"https://www.Ovrlab.de/\" rel=\"noreferrer\" target=\"_blank\">Ovrlab</a> - 2022",
        "experience-up-lefx":"Update des Designs der Webseite <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a> - 2023",
        "experience-overall":"Acht Jahre Berufserfahrung - 2015 bis jetzt",
        "commissions-title":"Auftraggeber",
        "modal-close": "Schließen",
    },
    "fr": {
        "page-title":"Curriculum-vitae de Sebastian Pötter",
        "owner-name":"SEBASTIAN POETTER",
        "owner-job-name":"Développeur de pile complète",
        "contact-title":"Données de contact",
        "contact-email":"<span class=\"d-none\"><a href=\"mailto:email@domain.com\"></a>email@domain.com</span>\n" +
            "<a href=\"&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x73;&#x65;&#x62;&#x61;&#x73;&#x74;&#x69;&#x61;&#x6e;&#x2e;&#x70;&#x6f;&#x65;&#x74;&#x74;&#x65;&#x72;%2D%64%65%76%40%67%6D%78%2E%64%65%20\">Envoyez-moi un e-mail</a>",
        "contact-github":"Retrouvez-moi sur Github",
        "contact-linkedin":"LinkedIn",
        "hobbies-title":"hobbies",
        "hobbies-programming":"Programmer",
        "hobbies-swimming":"Nager",
        "hobbies-hiking":"Randonnées",
        "hobbies-game":"Développement de jeux",
        "hobbies-planting":"Jardinage",
        "hobbies-circuit":"IoT bricolage",
        "hobbies-gaming":"Jeux",
        "hobbies-modeling":"Modélisation 3d",
        "skills-title":"compétences",
        "skills-gfx":"L'édition d'images, par exemple avec ",
        "skills-3d":"Animation, par exemple avec ",
        "skills-web":"Connaissance de ",
        "skills-team":"Direction d'équipe et organisation du projet",
        "skills-circuit":"Connaissance de l'ingénierie électrique, par exemple avec <a href=\"https://www.arduino.cc/\" rel=\"noreferrer\" target=\"_blank\">Arduino</a> et <a href=\"https://wordpress.com/\" rel=\"noreferrer\" target=\"_blank\">Raspberry Pi</a>",
        "projects-title":"Projets",
        "projects-fan" : "Pilote de ventilateur",
        "projects-notes" : "Application de prise de notes (PWA)",
        "projects-prio" : "File d'attente prioritaire",
        "projects-weather" : "Station météo (IoT)",
        "projects-yolo" : "Réseau neuronal",
        "projects-table" : "Calcul de l'emploi du temps",
        "projects-satellite":"Visualisation des mouvements des satellitesn",
        "projects-master":"Simulation d'un écosystème",
        "footer-title":"IMPRESSION",
        "footer-copyright":"par SEBASTIAN PÖTTER",
        "footer-policy":"POLITIQUE DE PROTECTION DE LA VIE PRIVÉE",
        "footer-library":"BIBLIOTHÈQUES UTILISÉES",
        "profile-title":"PROFIL",
        "profile-begin":"Je m'appelle Sebastian Pötter. Je suis étudiant à l'université des sciences appliquées de Leipzig et je prépare actuellement un master en informatique avec une spécialisation en intelligence artificielle et en développement de logiciels. Je peux me familiariser rapidement avec de nouveaux projets et j'aime résoudre les problèmes récalcitrants.",
        "profile-other":"Je suis intéressé par un large éventail de sujets dans le domaine de l'informatique. Cependant, l'informatique n'est pas mon seul centre d'intérêt, je m'intéresse également à d'autres sujets tels que la biologie, la chimie, la physique et l'électrotechnique.",
        "education-title":"ÉDUCATION",
        "education-secondary-title":"L'école secondaire (Realschule)",
        "education-secondary-text":"En 2017, j'ai obtenu mon diplôme de bachelor en informatique avec une spécialisation en ingénierie logicielle et en techniques de programmation. En Allemagne, l'école secondaire s'appelle Realschule et mène soit à un apprentissage, soit, dans mon cas, à un enseignement supérieur comparable aux lycées. C'est là que j'ai commencé à m'intéresser à l'informatique et que j'ai commencé à construire des sites web simples comme passe-temps.",
        "education-high-title":"Lycée (Abitur)",
        "education-high-text":"J'ai passé mon diplôme d'entrée à l'enseignement supérieur avec spécialisation en informatique en 2017. Pendant cette période, j'ai travaillé sur des projets simples et j'ai conçu des sites web gratuits. J'ai commencé à travailler avec le moteur de développement de jeux Unity et j'ai fait quelques petites applications 3D.",
        "education-bachelor-title":"Université : Licence en sciences",
        "education-bachelor-text":"J'ai commencé à étudier l'informatique en me concentrant sur la technologie des logiciels et les techniques de programmation en 2017. Je me suis beaucoup amélioré en programmation, en ingénierie algorithmique et en planification logicielle. Après le cours \"Principes de la robotique mobile\", j'ai commencé à expérimenter avec des planches de pi arduino et framboise pour créer du matériel comme une station météo pour ma maison - jamais.",
        "education-bachelor-subjects":"Certains de mes sujets étaient",
        "education-bachelor-subject-ads":"Algorithmes et structures de données",
        "education-bachelor-math":"Les mathématiques pour les informaticiens",
        "education-bachelor-programming":"Programmation orientée application/système/parallèle",
        "education-bachelor-fp":"Programmation fonctionnelle",
        "education-bachelor-afl":"Automates et langues formelles",
        "education-bachelor-ai":"Principes de l'intelligence artificielle",
        "education-bachelor-mr":"Principes de la robotique mobile",
        "education-bachelor-th":"Ma thèse de bachelor: <a href=\"https://nbn-resolving.org/urn:nbn:de:bsz:l189-qucosa2-753784\" rel=\"noreferrer\" target=\"_blank\">Ordonnancement soutenu par l'algorithme</a>",
        "education-master-title":"Université : Master of Science - 2023",
        "education-master-text":"Je veux améliorer les compétences que j'ai acquises et je veux en apprendre davantage. J'ai donc pensé que le diplôme de master était le meilleur moyen d'y parvenir.",
        "education-master-subjects":"Voici quelques-uns des sujets que j'ai choisis",
        "education-master-3d":"Capture, conception et dynamique 3D",
        "education-master-alg":"Ingénierie des algorithmes",
        "education-master-prog":"Applications Web progressives",
        "education-master-mr":"Réalité mixte et IA",
        "education-master-visu":"Visualisation en sciences naturelles et en ingénierie",
        "education-master-ivra":"Architectures informatiques innovantes",
        "education-master-cry":" Cryptologie",
        "education-master-oagr":"Reconnaissance d'objets et de gestes",
        "education-master-th":"Mon sujet de thèse de master: <a href=\"https://github.com/poetter-sebastian/Simulation\" rel=\"noreferrer\" target=\"_blank\">Développement d'une simulation environnementale en Unity</a>",
        "experience-title":"EXPÉRIENCE",
        "experience-small-com":"Commissions multiples de sites web d'une page pour les petites entreprises - 2014-2017",
        "experience-landing-page":"Commande d'une page d'atterrissage pour une entreprise à Dresden - 2017",
        "experience-profesco":"Commande d'un site wordpress-website pour la société Profesco GmbH (création et administration) - 2019",
        "experience-internship":"Stage de douze semaines chez Profesco GmbH dans le département informatique - 2020",
        "experience-lefx":"Refonte et mise à jour du site web wordpress de la société LeFx GmbH - 2020-2021",
        "experience-velomotion":"Mise à jour des sites web de la société Velomotion GmbH - 2021",
        "experience-aktiv":"Création d'un site web pour l'entreprise <a href=\"https://www.aktiv-oase.de/\" rel=\"noreferrer\" target=\"_blank\">EB Gesundheitsstudio GmbH</a> - 2021",
        "experience-sanit":"Révision de la page d'accueil de <a href=\"https://san-rosenau.de/Start.html\" rel=\"noreferrer\" target=\"_blank\">Sanitätshaus Rosenau GmbH</a> - 2021",
        "experience-saxony":"Commission pour la création d'une page de récompense du <a href=\"https://www.games-innovation-award-saxony.de/\" rel=\"noreferrer\" target=\"_blank\">Games innovation award saxony</a> - 2021",
        "experience-ovrlab": "Révision des pages <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a>, <a href=\"https://www.vrbits.de/\" rel=\"noreferrer\" target=\"_blank\">VrBits</a> et <a href=\"https://www.Ovrlab.de/\" rel=\"noreferrer\" target=\"_blank\">Ovrlab</a> - 2022",
        "experience-up-lefx":"Mise à jour de la conception du site <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a> - 2023",
        "experience-overall":"Huit ans d'expérience professionnelle - de 2015 à aujourd'hui",
        "commissions-title":"QUI M'A COMMANDÉ",
        "modal-close" : "fermer",
    }
};

let langElements;
langElements = $('[data-i18n]');

function logElements() {
    $.each(langElements, function(index, value) {
        console.log('"'+value.getAttribute('data-i18n')+ '":"'+value.innerText+'",');
        //console.log('"'+value.getAttribute('data-i18n')+ '":"",');
    });
}

function changeLang(lang) {
    switch (lang) {
        case "en":
            break;
        case "de":
            break;
        case "fr":
            break;
        default:
            return;
    }
    document.documentElement.lang = lang;
    $.each(langElements, function(index, value) {
        let currentObj = value.getAttribute('data-i18n');
        if(typeof langJson[lang][currentObj] !== 'undefined') {
            value.innerHTML = langJson[lang][currentObj];
        } else {
            console.log('"' + currentObj + '" in language json not found!')
        }
    });
}
