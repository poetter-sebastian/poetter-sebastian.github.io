const prefersDarkScheme= window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const currentTheme = localStorage.getItem("theme") ?? undefined;

let langElements;

$(document).ready(function() {
    langElements = $('[data-i18n]');

    if(bl !== 'en'){
        changeLang(bl);
    }

    $('.year').each(function() {
        this.innerText = new Date().getFullYear();
    });

    if ((prefersDarkScheme && currentTheme === undefined) || currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        $('#darkMode').prop( "checked", true);
    } else if (currentTheme === "light") {
        document.body.classList.add("light-theme");
    }
});

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
    bl = lang;
    $.each(langElements, function(index, value) {
        let currentObj = value.getAttribute('data-i18n');
        if(typeof langJson[lang][currentObj] !== 'undefined') {
            value.innerHTML = langJson[lang][currentObj];
        } else {
            console.log('"' + currentObj + '" in language json not found!')
        }
    });

}

function toggleMode() {
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
}

const langJson = {
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

        "services-web":"SEO and responsive optimized web-development",
        "services-dev":"Server and client development",
        "services-team":"Team leading and team analytics",
        "services-digi":"Digitization of your business processes",

        "footer-title":"IMPRINT",
        "footer-copyright":"BY SEBASTIAN POETTER",
        "footer-policy":"PRIVACY POLICY",
        "footer-library":"USED LIBRARIES",
        "profile-title":"PROFILE",
        "profile-begin":"My name is Sebastian Pötter. I recently completed my master's degree in computer science and am looking for new problems to solve and projects to work on.",
        "profile-other":"I am interested in a wide range of topics in the field of computer science, such as web development, app development, and server applications. " +
            "I did a lot of private projects and also commissions for my customers.<br><br> I was a freelancer for web development (WordPress, PHP8, Javascript), project " +
            "management and software developer (dotnetCore, Java) during my time at the university and before. I got used to open source technology, business process digitization " +
            "and modern development management (like SCRUM or Kanban). With the theoretical knowledge gained at university and practical applied skills gained at my freelance work, " +
            "I'm able to familiarize myself quickly with new projects, <br><br>So I independently planned and completed commissions and introduced them to my customers. " +
            "Managing of software requirements and transparent communication with my clients to get change requests, but also feedback on the finished tasks or projects, " +
            "belong to my skills. However, computers and information technology are not my only interest, other areas such as biology, chemistry, physics, and electrical " +
            "engineering are very interesting too.",

        "education-title":"EDUCATION",
        "education-secondary-title":"Secondary school (Realschule)",
        "education-secondary-text":"I graduated from secondary school in 2014. In Germany the Secondary school is called Realschule and leads to either apprenticeships or " +
            "on my case to higher education comparable to high schools. Here I started getting interested in Computer and started building simple websites as a hobby.",
        "education-high-title":"High School (Abitur)",
        "education-high-text":"I made my higher education entrance qualification with focus on computer science in 2017. During this time I worked on some simple projects " +
            "and made free website designs. Here I started to work with the game-development engine Unity and made some smaller 3D-applications.",
        "education-bachelor-title":"University: Bachelor of Science",
        "education-bachelor-text":"I started studying informatics with a focus on software technology and programming techniques in 2017. I got way better at programming, " +
            "algorithm engineering and software planning. After the course 'principles of mobile robotics' I started experimenting with arduino and raspberry pi boards to " +
            "create hardware like a weather-station for my home-sever.",
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
        "education-master-team":"Team management internship (SCRUM-team leader for an eight-person team)",

        "education-master-th":"My master thesis: <a href=\"https://github.com/poetter-sebastian/Simulation\" rel=\"noreferrer\" target=\"_blank\">Development of an environmental simulation in Unity</a>",
        "experience-title":"EXPERIENCE",
        "experience-small-com":"Multiple commissions of one-page-websites for smaller companies - 2014-2017",
        "experience-landing-page":"Commission of a landing-page for a company in Dresden - 2017",
        "experience-profesco":"Commission of a wordpress-website for the <a href=\"https://www.profesco.de\" rel=\"noreferrer\" target=\"_blank\">Profesco GmbH</a> (creation and administration) - 2019-2021",
        "experience-internship":"Twelve weeks internship at <a href=\"https://www.profesco.de\" rel=\"noreferrer\" target=\"_blank\">Profesco GmbH</a> in the IT department - 2020",
        "experience-lefx":"Reworked and updated the WordPress website of the company <a href=\"https://www.LeFx.de\" rel=\"noreferrer\" target=\"_blank\">LeFx GmbH</a> - 2020-2021",
        "experience-velomotion":"Updated parts of <a href=\"https://www.velomotion.de/\" rel=\"noreferrer\" target=\"_blank\">Velomotion GmbH</a> - 2020",
        "experience-aktiv":"Created a website for the company <a href=\"https://www.aktiv-oase.de/\" rel=\"noreferrer\" target=\"_blank\">EB Gesundheitsstudio GmbH</a> - 2021",
        "experience-sanit":"Revised the homepage of <a href=\"https://san-rosenau.de/Start.html\" rel=\"noreferrer\" target=\"_blank\">Sanitätshaus Rosenau GmbH</a> - 2021",
        "experience-team":"Team management internship (SCRUM-team leader for an eight-person team) - 2021-2022",
        "experience-saxony":"Commission of an award-page for <a href=\"https://www.games-innovation-award-saxony.de/\" rel=\"noreferrer\" target=\"_blank\">Games innovation award saxony</a> - 2021",
        "experience-ovrlab":"Improvement of <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a>, <a href=\"https://www.vrbits.de/\" rel=\"noreferrer\" target=\"_blank\">VrBits</a> and <a href=\"https://www.Ovrlab.de/\" rel=\"noreferrer\" target=\"_blank\">Ovrlab</a> - 2022",
        "experience-up-lefx":"Design upgrade of <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a> - 2023",
        "experience-overall":"Nine years of work experience - 2015 until now",
        "commissions-title":"WHO EMPLOYED/COMMISSIONED ME",

        "project-rasp-name":"Raspberry Pi fan control",
        "project-rasp-desc":"",

        "project-note-name":"Notes App (PWA)",
        "project-note-desc":"",

        "project-priority-name":"Concurrent priority list",
        "project-priority-desc":"",

        "project-weather-name":"Weather station (IoT)",
        "project-weather-desc":"",

        "project-yolo-name":"YoloV5 Neural network",
        "project-yolo-desc":"",

        "project-sat-name":"Satellite movement visualisation",
        "project-sat-desc":"",

        "project-time-name":"Timetable creator",
        "project-time-desc":"",

        "project-simulation-name":"Simulation of an ecosystem",
        "project-simulation-desc":"",

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

        "project-rasp-name":"Raspberry Pi Lüftertreiber",
        "project-rasp-desc":"",
        "project-note-name":"Notizen App (PWA)",
        "project-note-desc":"",
        "project-priority-name":"Prioritätswarteschlange",
        "project-priority-desc":"",
        "project-weather-name":"Wetterstation (IoT)",
        "project-weather-desc":"",
        "project-yolo-name":"YoloV5 Neuronales Netzwerk",
        "project-yolo-desc":"",
        "project-sat-name":"Visualising von Satellitenbewegungen",
        "project-sat-desc":"",
        "project-time-name":"Stundenplan Generierung",
        "project-time-desc":"",
        "project-simulation-name":"Simulation eines Ökosystems",
        "project-simulation-desc":"",

        "services-web":"SEO und responsive optimierte Webentwicklung",
        "services-dev":"Server und Desktop Entwicklung",
        "services-team":"Teamleitung und Teamberatung",
        "services-digi":"Digitalisierung von Unternehmensprozessen",

        "footer-title":"Impressum",
        "footer-copyright":"Erstellt von Sebastian Pötter",
        "footer-policy":"Datenschutzerklärung",
        "footer-library":"Benutze Frameworks",
        "profile-title":"Profil",
        "profile-begin":"Mein Name ist Sebastian Pötter. Ich habe kürzlich meinen Master in Informatik abgeschlossen und habe jetzt den Titel Master of Science erworben. Ich bin immer auf der Suche nach spannenden Projekten.",
        "profile-other":"Ich bin an vielen IT-Themengebieten interessiert, wie zum Beispiel Entwicklung von Webseiten, Desktop- und Serverprogramme. " +
            "Ich habe bereits zahlreiche Projekte umgesetzt, dazu gehören viele private aber auch von Kunden geforderte Projekte. <br><br>Ich wurde schon während meiner Zeit an der Universität von Kunden im " +
            "Gebieten der Webentwicklung (WordPress, PHP8, Javascript), des Projektmanagement und der Softwareentwicklung (dotnetCore, Java) beauftragt. " +
            "Dabei konnte ich Erfahrung mit Open-Source Systemen, Unternehmensdigitalisierung und agiler Softwareentwicklung wie SCRUM oder Kanban kennenlernen. " +
            "Mit den theoretischen Kenntnissen, die ich an der Universität erworben habe, und den praktischen Fähigkeiten, die ich bei meiner freiberuflichen Tätigkeit erworben habe, " +
            "kann ich mich schnell in neue Projekte einarbeiten oder diese planen. <br><br>Damit konnte ich selbstständig Aufträge durchgeführt und meinen Kunden vorstellen. " +
            "Das Erstellen von Software-Anforderungen (Lastenheft) und eine transparente Kommunikation mit meinen Kunden, um Änderungswünsche, aber auch Feedback zu den abgeschlossenen Aufgaben oder Projekten zu erhalten, gehören zu meinen Fähigkeiten. " +
            "Nicht nur Informatikthemen gehören zu meinen Interessen, auch andere Bereiche wie Biologie, Chemie, Physik und Elektrotechnik sind für mich sehr interessant.",
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
        "education-bachelor-th":"Meine Bachelorarbeit: <a href=\"https://nbn-resolving.org/urn:nbn:de:bsz:l189-qucosa2-753784\" rel=\"noreferrer\" target=\"_blank\">Algorithmisch unterstützte Terminplanung</a>",
        "education-master-title":"Universität: Master of Science - 2023",
        "education-master-text":"Ich wollte die Fähigkeiten aus dem Studium vertiefen und verbessern. Hierfür ist der Masterstudiengang der beste Weg",
        "education-master-subjects":"Ein paar meiner gewählten Fächer",
        "education-master-3d":"3D-Erfassung, -Design und -Dynamik",
        "education-master-alg":"Algorithmenentwicklung",
        "education-master-prog":"Progressive Web Apps",
        "education-master-mr":"Mixed Reality & Künstliche Intelligenz",
        "education-master-visu":"Visualisierung in Natur- und Ingenieurwissenschaften",
        "education-master-ivra":"Innovative Rechnerarchitekturen",
        "education-master-cry":" Kryptologie",
        "education-master-oagr":"Objekt- und Gestenerkennung",
        "education-master-team":"Team management Praktikum (SCRUM-Teamleiter für ein acht personen Team)",
        "education-master-th":"Meine Masterarbeit: <a href=\"https://github.com/poetter-sebastian/Simulation\" rel=\"noreferrer\" target=\"_blank\">Entwicklung einer Umweltsimulation in Unity</a>",
        "experience-title":"Erfahrung",
        "experience-small-com":"Beauftragungen von kleineren One-Page-Webseiten für Unternehmen wie IKD-Training - 2014-2017",
        "experience-landing-page":"Erstellung einer Webseite für ein Unternehmen in Dresden - 2017",
        "experience-profesco":"Beauftragung einer Wordpress-Seite für die <a href=\"https://www.profesco.de/\" rel=\"noreferrer\">Profesco GmbH</a> (Erstellung und Wartung) - 2019-2021",
        "experience-internship":"12 Wochen Praktikum bei <a href=\"https://www.profesco.de/\" rel=\"noreferrer\">Profesco GmbH</a> in der IT-Abteilung - 2020",
        "experience-velomotion":"Aktualisierungen von Funktionalitäten der Webseite <a href=\"https://www.velomotion.de/\" rel=\"noreferrer\">Velomotion GmbH</a> - 2020",
        "experience-lefx":"Überarbeitung und Aktualisierung der Wordpress-Website der <a href=\"https://www.lefx.de/\" rel=\"noreferrer\">LeFx GmbH</a> - 2020-2021",
        "experience-aktiv":"Erstellung einer Website für das Unternehmen <a href=\"https://www.aktiv-oase.de/\" rel=\"noreferrer\" target=\"_blank\">EB Gesundheitsstudio GmbH</a> - 2021",
        "experience-sanit":"Überarbeitung der Homepage der <a href=\"https://san-rosenau.de/Start.html\" rel=\"noreferrer\" target=\"_blank\">Sanitätshaus Rosenau GmbH</a> - 2021",
        "experience-saxony":"Beauftragen zum Erstellen einer Preisseite des <a href=\"https://www.games-innovation-award-saxony.de/\" rel=\"noreferrer\" target=\"_blank\">Games innovation award saxony</a> - 2021",
        "experience-team":"Team management Praktikum (SCRUM-Teamleiter für ein acht personen Team) - 2021-2022",
        "experience-ovrlab": "Überarbeitung der Seiten <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a>, <a href=\"https://www.vrbits.de/\" rel=\"noreferrer\" target=\"_blank\">VrBits</a> und <a href=\"https://www.Ovrlab.de/\" rel=\"noreferrer\" target=\"_blank\">Ovrlab</a> - 2022",
        "experience-up-lefx":"Update des Designs der Webseite <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a> - 2023",
        "experience-overall":"Neun Jahre Berufserfahrung - 2015 bis jetzt",
        "commissions-title":"Arbeits-/Auftragsgeber",
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

        "project-rasp-name":"Raspberry Pi Pilote de ventilateur",
        "project-rasp-desc":"",
        "project-note-name":"Application de prise de notes (PWA)",
        "project-note-desc":"",
        "project-priority-name":"File d'attente prioritaire",
        "project-priority-desc":"",
        "project-weather-name":"Station météo (IoT)",
        "project-weather-desc":"",
        "project-yolo-name":"YoloV5 Réseau neuronal",
        "project-yolo-desc":"",
        "project-sat-name":"Visualisation des mouvements des satellitesn",
        "project-sat-desc":"",
        "project-time-name":"Calcul de l'emploi du temps",
        "project-time-desc":"",
        "project-simulation-name":"Simulation d'un écosystème",
        "project-simulation-desc":"",

        "services-web":"SEO et développement web optimisé pour le responsive",
        "services-dev":"Développement serveur et bureau",
        "services-team":"Gestion et conseil d'équipe",
        "services-digi":"Numérisation des processus d'entreprise",

        "footer-title":"IMPRESSION",
        "footer-copyright":"par SEBASTIAN PÖTTER",
        "footer-policy":"POLITIQUE DE PROTECTION DE LA VIE PRIVÉE",
        "footer-library":"BIBLIOTHÈQUES UTILISÉES",
        "profile-title":"PROFIL",
        "profile-begin":"Je m'appelle Sebastian Pötter. J'ai récemment terminé mon master en informatique et j'ai maintenant le titre de Master of Science. Je peux m'adapter rapidement à de nouveaux projets et j'aime résoudre les problèmes persistants.",
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
        "education-master-team":"Stage en gestion d'équipe (chef d'équipe SCRUM pour une équipe de huit personnes)",
        "education-master-th":"Mon sujet de thèse de master: <a href=\"https://github.com/poetter-sebastian/Simulation\" rel=\"noreferrer\" target=\"_blank\">Développement d'une simulation environnementale en Unity</a>",
        "experience-title":"EXPÉRIENCE",
        "experience-small-com":"Commissions multiples de sites web d'une page pour les petites entreprises par exemple IKD-Training - 2014-2017",
        "experience-landing-page":"Commande d'une page d'atterrissage pour une entreprise à Dresden - 2017",
        "experience-profesco":"Commande d'un site wordpress-website pour la société Profesco GmbH (création et administration) - 2019",
        "experience-internship":"Stage de douze semaines chez Profesco GmbH dans le département informatique - 2020",
        "experience-lefx":"Refonte et mise à jour du site web wordpress de la société LeFx GmbH - 2020-2021",
        "experience-velomotion":"Mise à jour des sites web de la société Velomotion GmbH - 2021",
        "experience-aktiv":"Création d'un site web pour l'entreprise <a href=\"https://www.aktiv-oase.de/\" rel=\"noreferrer\" target=\"_blank\">EB Gesundheitsstudio GmbH</a> - 2021",
        "experience-sanit":"Révision de la page d'accueil de <a href=\"https://san-rosenau.de/Start.html\" rel=\"noreferrer\" target=\"_blank\">Sanitätshaus Rosenau GmbH</a> - 2021",
        "experience-team":"Stage en gestion d'équipe (chef d'équipe SCRUM pour une équipe de huit personnes) - 2021-2022",
        "experience-saxony":"Commission pour la création d'une page de récompense du <a href=\"https://www.games-innovation-award-saxony.de/\" rel=\"noreferrer\" target=\"_blank\">Games innovation award saxony</a> - 2021",
        "experience-ovrlab": "Révision des pages <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a>, <a href=\"https://www.vrbits.de/\" rel=\"noreferrer\" target=\"_blank\">VrBits</a> et <a href=\"https://www.Ovrlab.de/\" rel=\"noreferrer\" target=\"_blank\">Ovrlab</a> - 2022",
        "experience-up-lefx":"Mise à jour de la conception du site <a href=\"https://www.lefx.de/\" rel=\"noreferrer\" target=\"_blank\">LeFx</a> - 2023",
        "experience-overall":"Neuf ans d'expérience professionnelle - de 2015 à aujourd'hui",
        "commissions-title":"Mandant et employeur",
        "modal-close" : "fermer",
    }
};