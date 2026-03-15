import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {
    faSun,
    faMoon,
    faLayerGroup,
    faLaptopCode,
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
    faCube, faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFirefoxBrowser,
    faUbuntu,
    faUnity,
    faRaspberryPi
} from '@fortawesome/free-brands-svg-icons';
import {ContactList} from '../contact-list';
import {LeftTitle} from '../left-title';
import {SkillContainer} from '../skill-container';
import {HobbyProjectListComponent} from '../hobby-project-list-component';
import {ServiceItem} from '../../right/service-item';
import {HobbyItem} from '../hobby-item';
import {FooterComponent} from '../../footer';

@Component({
    selector: 'app-left-container',
    host: {'class': 'col-lg-4 primary-bg p-0 m-0'},
    imports: [
        FontAwesomeModule,
        ContactList,
        LeftTitle,
        SkillContainer,
        HobbyProjectListComponent,
        ServiceItem,
        HobbyItem,
        FooterComponent,
        CommonModule,
        FormsModule
    ],
    templateUrl: './left-container.component.html',
    standalone: true,
    styleUrl: './left-container.component.sass'
})

export class LeftContainerComponent {
    @Input() changeLang!: (lang: string) => void;
    @Input() toggleMode!: (value: Event) => void;
    @Input() darkMode = false;
    @Output() darkModeChange = new EventEmitter<boolean>();
    @Input() currentLanguage: string = "";

    faSun: IconDefinition = faSun;
    faMoon: IconDefinition = faMoon;
    faLayerGroup: IconDefinition = faLayerGroup;
    faLaptopCode: IconDefinition = faLaptopCode;
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
    faFileLines: IconDefinition = faFileLines;
    faTv: IconDefinition = faTv;
    faHiking: IconDefinition = faHiking;
    faSwimmer: IconDefinition = faSwimmer;
    faSeedling: IconDefinition = faSeedling;
    faRaspberryPi: IconDefinition = faRaspberryPi;
    faGamepad: IconDefinition = faGamepad;
    faCube: IconDefinition = faCube;

    faFirefoxBrowser: IconDefinition = faFirefoxBrowser;
    faUbuntu: IconDefinition = faUbuntu;
    faUnity: IconDefinition = faUnity;
}
