import {AfterViewInit, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {i18n} from './lang/i18n';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {
    faSun,
    faMoon,
    faLayerGroup,
    faLaptopCode,
    faEnvelope,
    faGlobe,
    faKeyboard,
    faPaintBrush,
    faFilm,
    faFileAlt,
    faUsers,
    faMicrochip,
    faUsersCog,
    faServer,
    faProjectDiagram,
    faChartDiagram,
    faFan,
    faMobileAlt,
    faListOl,
    faCloudSun,
    faRobot,
    faSatellite,
    faCalendarAlt,
    faLeaf,
    faKey,
    faPager,
    faUserFriends,
    faIndustry,
    faTv,
    faHiking,
    faSwimmer,
    faSeedling,
    faGamepad,
    faCube,
    faUser,
    faGraduationCap,
    faCircle,
    faAddressBook,
    faAddressCard
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedinIn,
    faMastodon,
    faItchIo,
    faFirefoxBrowser,
    faUbuntu,
    faUnity,
    faRaspberryPi
} from '@fortawesome/free-brands-svg-icons';

import {RightTitle} from './components/right-title';
import {SkillContainer} from './components/skill-container';
import {LeftTitle} from './components/left-title';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import {ContactItem} from './components/contact-item';
import {ProjectItem} from './components/project-item';
import {ServiceItem} from './components/service-item';
import {HobbyItem} from './components/hobby-item';
import {FooterComponent} from './components/footer';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, FaIconComponent, FontAwesomeModule, RightTitle, RightTitle, RightTitle, SkillContainer, LeftTitle, FormsModule, NgOptimizedImage, ContactItem, ProjectItem, ServiceItem, HobbyItem, FooterComponent, NgOptimizedImage],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})

export class AppComponent implements AfterViewInit {
    title: string = 'poetter-sebastian.github.io';
    currentLanguage: string;
    langElements!: NodeListOf<HTMLElement>;
    isDark: boolean = true;

    currentTheme?: string | null;
    prefersDarkScheme: boolean;
    darkMode: boolean = true

    faSun: IconDefinition = faSun;
    faMoon: IconDefinition = faMoon;
    faLayerGroup: IconDefinition = faLayerGroup;
    faLaptopCode: IconDefinition = faLaptopCode;
    faEnvelope: IconDefinition = faEnvelope;
    faGlobe: IconDefinition = faGlobe;
    faKeyboard: IconDefinition = faKeyboard;
    faPaintBrush: IconDefinition = faPaintBrush;
    faFilm: IconDefinition = faFilm;
    faFileAlt: IconDefinition = faFileAlt;
    faUsers: IconDefinition = faUsers;
    faMicrochip: IconDefinition = faMicrochip;
    faUsersCog: IconDefinition = faUsersCog;
    faServer: IconDefinition = faServer;
    faProjectDiagram: IconDefinition = faProjectDiagram;
    faChartDiagram: IconDefinition = faChartDiagram;
    faFan: IconDefinition = faFan;
    faMobileAlt: IconDefinition = faMobileAlt;
    faListOl: IconDefinition = faListOl;
    faCloudSun: IconDefinition = faCloudSun;
    faRobot: IconDefinition = faRobot;
    faSatellite: IconDefinition = faSatellite;
    faCalendarAlt: IconDefinition = faCalendarAlt;
    faLeaf: IconDefinition = faLeaf;
    faKey: IconDefinition = faKey;
    faPager: IconDefinition = faPager;
    faUserFriends: IconDefinition = faUserFriends;
    faIndustry: IconDefinition = faIndustry;
    faTv: IconDefinition = faTv;
    faHiking: IconDefinition = faHiking;
    faSwimmer: IconDefinition = faSwimmer;
    faSeedling: IconDefinition = faSeedling;
    faRaspberryPi: IconDefinition = faRaspberryPi;
    faGamepad: IconDefinition = faGamepad;
    faCube: IconDefinition = faCube;
    faUser: IconDefinition = faUser;
    faGraduationCap: IconDefinition = faGraduationCap;
    faCircle: IconDefinition = faCircle;
    faAddressBook: IconDefinition = faAddressBook;

    faGithub: IconDefinition = faGithub;
    faLinkedinIn: IconDefinition = faLinkedinIn;
    faMastodon: IconDefinition = faMastodon;
    faItchIo: IconDefinition = faItchIo;
    faFirefoxBrowser: IconDefinition = faFirefoxBrowser;
    faUbuntu: IconDefinition = faUbuntu;
    faUnity: IconDefinition = faUnity;

    constructor() {
        this.prefersDarkScheme = (typeof window !== 'undefined' && window.matchMedia) ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
        this.currentLanguage = (typeof navigator === 'undefined' || !navigator.language) ? 'en' : navigator.language;
        this.currentTheme = (typeof window !== 'undefined') ? localStorage.getItem("theme") ?? null : null;
    }

    ngAfterViewInit(): void {
        if ((this.prefersDarkScheme && this.currentTheme === null) || this.currentTheme === 'dark') {
            document.body.classList.add('dark-theme');

            let darkMode: HTMLFormElement | null = document.getElementById('darkMode') as HTMLFormElement
            if (darkMode !== null) {
                //console.log(darkMode);
                darkMode['checked'] = true;
            }
        } else if (this.currentTheme === 'light') {
            document.body.classList.add('light-theme');
        }

        if (typeof window !== 'undefined') {
            let toNow = document.getElementById('to-now') ?? null;
            if (toNow !== null) {
                toNow.innerText = (new Date().getFullYear() - new Date(2015, 0).getFullYear()).toString()
            }

            let currentYear = new Date().getFullYear().toString()
            document.querySelectorAll('.year').forEach(function (e) {
                e.innerHTML = currentYear;
            })

            this.langElements = document.querySelectorAll('[data-i18n]');
            this.changeLang(this.currentLanguage);
        }
    }

    toggleMode(value: Event): void {
        let inputElement = (value.target as HTMLInputElement)
        if (inputElement != null) {
            this.darkMode = inputElement?.checked ?? false
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
            localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
        }
    }

    changeLang(lang: string): void {
        document.documentElement.lang = lang;
        this.currentLanguage = lang;
        let selectedLang = (i18n.find(needle => needle.language === this.currentLanguage)?.translations ?? {}) as Record<string, string>;
        this.langElements?.forEach(function (value) {
            let currentObj = value.getAttribute('data-i18n') ?? '';
            if (typeof selectedLang[currentObj] !== 'undefined') {
                value.innerHTML = selectedLang[currentObj];
            } else {
                //debug purpose only
                console.log('"' + currentObj + '" in language json not found!')
            }
        });
    }

    logElements(): void {
        this.langElements.forEach(function (value) {
            console.log('"' + value.getAttribute('data-i18n') + '":"' + value.innerText + '",');
        });
    }

    protected readonly faAddressCard = faAddressCard;
}
