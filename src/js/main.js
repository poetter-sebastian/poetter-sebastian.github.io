$(document).ready(function() {
    if(bl !== 'en'){
        chanceLang('bl')
    }
})

let langJson = {
    "en": {
        "page-title":"Curriculum-vitae of Sebastian Poetter",
        "owner-name":"SEBASTIAN POETTER",
        "owner-job-name":"FULL STACK DEVELOPER",
        "contact-title":"CONTACT",
        "contact-email":"<a href=\"mailto:customer-sd@gmx.de\">Send me a mail</a>",
        "contact-github":"Find me on Github",
        "hobbies-title":"HOBBIES",
        "hobbies-programming":"Programming",
        "hobbies-swimming":"Swimming",
        "hobbies-hiking":"Hiking",
        "hobbies-modeling":"3D Developing",
        "hobbies-planting":"Gardening",
        "hobbies-circuit":"IoT tinkering",
        "skills-title":"SKILLS",
        "skills-gfx":"Image editing e.g. with GIMP, Inkscape, Photoshop",
        "skills-3d":"Animations e.g. with After Effects, Vegas, Blender",
        "skills-web":"Knowledge of Wordpress, Cakephp4, Node.js",
        "skills-team":"Teamleading and Projektorganisation",
        "skills-circuit":"Knowledge of electrical engineering e.g. with arduino and raspberry pi",
        "profile-title":"PROFILE",
        "profile-begin":"My name is Sebastian Poetter. I'm an university student and attending an undergraduate degree for computational science. I can quickly get focused on new things and learn very quickly.",
        "profile-other":"I'm not only good at in computer science, but am also interested in other topics, namely biology, chemistry and physics Bionics and Bioinformatics are a passion of mine.",
        "education-title":"EDUCATION",
        "education-secondary-title":"Secondary school (Realschule)",
        "education-secondary-text":"I graduated secondary school in 2014. In Germany the Secondary school is called Realschule and leads to either apprenticeships or on my case to higher education comparable to high schools. Here I started getting interested in Computer and started building simple websites as a hobby.",
        "education-high-title":"High School (Abitur)",
        "education-high-text":"I made my higher education entrance qualification with focus on computer science in 2017. During this time I worked on some simple projects and made free website designs. Here I started to work with the Gamedevelopment engine Unity and made some smaller 3D-applications.",
        "education-bachelor-title":"University: Bachelor of Science",
        "education-bachelor-text":"I started studying informatics with a focus on software technology and programming techniques in 2017. I got way better at programming, algorithm engineering and software planning. After the course 'principles of mobile robotics' I started experimenting with arduino and raspberry pi boards to create hardware like a weather-station for my home-sever.",
        "education-bachelor-subjects":"Some of my subjects were",
        "education-bachelor-subject-ads":"Algorithms and data structures",
        "education-bachelor-math":"Mathematics for computer scientists",
        "education-bachelor-programming":"Application-/system-/parallel oriented programming",
        "education-bachelor-fp":"Functional programming",
        "education-bachelor-physic":"Physics for computer scientists",
        "education-bachelor-afl":"Automata and formal languages",
        "education-bachelor-ai":"Principles of artificial Intelligence",
        "education-bachelor-mr":"Principles of mobile robotics",
        "education-master-title":"University: Master of Science (aspired for 2022)",
        "education-master-text":"I want to improve the skills I have learned and want to learn more. So I thought that the master degree is the best way for it.",
        "experience-title":"EXPERIENCE",
        "experience-small-com":"Multiple commissions of one-page-websites for smaller companies - 2014-2017",
        "experience-landing-page":"Commission of a landing-page for a company in Dresden - 2017",
        "experience-profesco":"Commission of a wordpress-website for the Profesco GmbH (creation and administration) - 2019",
        "experience-internship":"Twelve weeks internship at Profesco GmbH in the IT department - 2020",
        "experience-lefx":"Reworked and updated the wordpress-website of the company LeFx GmbH - 2020",
        "experience-overall":"Four years of work experience - 2014 until now",
        "commissions-title":"WHO COMMISSIONED ME",
    },
    "de": {
        "page-title":"",
        "owner-name":"",
        "owner-job-name":"",
        "contact-title":"",
        "contact-email":"",
        "contact-phone":"",
        "contact-github": "",
        "hobbies-title":"",
        "hobbies-programming":"",
        "hobbies-swimming":"",
        "hobbies-hiking":"",
        "hobbies-modeling":"",
        "hobbies-planting":"",
        "hobbies-circuit":"",
        "skills-title":"",
        "skills-gfx":"",
        "skills-3d":"",
        "skills-web":"",
        "skills-team":"",
        "skills-circuit":"",
        "profile-title":"",
        "profile-begin":"",
        "profile-other":"",
        "education-title":"",
        "education-secondary-title":"",
        "education-secondary-text":"",
        "education-high-title":"",
        "education-high-text":"",
        "education-bachelor-title":"",
        "education-bachelor-text":"",
        "education-bachelor-subjects":"",
        "education-bachelor-subject-ads":"",
        "education-bachelor-math":"",
        "education-bachelor-programming":"",
        "education-bachelor-fp":"",
        "education-bachelor-physic":"",
        "education-bachelor-afl":"",
        "education-bachelor-ai":"",
        "education-bachelor-mr":"",
        "education-master-title":"",
        "education-master-text":"",
        "experience-title":"",
        "experience-small-com":"",
        "experience-landing-page":"",
        "experience-profesco":"",
        "experience-internship":"",
        "experience-lefx":"Reworked and updated the wordpress-website of the company LeFx GmbH - 2020",
        "experience-overall":""
    },
    "fr": {
        "page-title":"",
        "owner-name":"",
        "owner-job-name":"",
        "contact-title":"",
        "contact-email":"",
        "contact-phone":"",
        "contact-github": "",
        "hobbies-title":"",
        "hobbies-programming":"",
        "hobbies-swimming":"",
        "hobbies-hiking":"",
        "hobbies-modeling":"",
        "hobbies-planting":"",
        "hobbies-circuit":"",
        "skills-title":"",
        "skills-gfx":"",
        "skills-3d":"",
        "skills-web":"",
        "skills-team":"",
        "skills-circuit":"",
        "profile-title":"",
        "profile-begin":"",
        "profile-other":"",
        "education-title":"",
        "education-secondary-title":"",
        "education-secondary-text":"",
        "education-high-title":"",
        "education-high-text":"",
        "education-bachelor-title":"",
        "education-bachelor-text":"",
        "education-bachelor-subjects":"",
        "education-bachelor-subject-ads":"",
        "education-bachelor-math":"",
        "education-bachelor-programming":"",
        "education-bachelor-fp":"",
        "education-bachelor-physic":"",
        "education-bachelor-afl":"",
        "education-bachelor-ai":"",
        "education-bachelor-mr":"",
        "education-master-title":"",
        "education-master-text":"",
        "experience-title":"",
        "experience-small-com":"",
        "experience-landing-page":"",
        "experience-profesco":"",
        "experience-internship":"",
        "experience-lefx":"Reworked and updated the wordpress-website of the company LeFx GmbH - 2020",
        "experience-overall":""
    }
};

let langElements;
langElements = $('[data-i18n]');

function logElements()
{
    $.each(langElements, function(index, value) {
        console.log('"'+value.getAttribute('data-i18n')+ '":"'+value.innerText+'",');
        //console.log('"'+value.getAttribute('data-i18n')+ '":"",');
    });
}

function chanceLang(lang) {
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
    $.each(langElements, function(index, value) {
        let currentObj = value.getAttribute('data-i18n');
        value.innerHTML = langJson[lang][currentObj];
    });
}
