import {Component, Input, Output, EventEmitter, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {I18nService} from '../../../services/i18n.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faSun, faMoon, faLayerGroup, faLaptopCode,} from '@fortawesome/free-solid-svg-icons';
import {ContactList} from '../contact-list';
import {LeftTitle} from '../left-title';
import {SkillContainer} from '../skill-container';
import {HobbyProjectListComponent} from '../hobby-project-list-component';
import {ServiceItem} from '../../right/service-item';
import {HobbyItem} from '../hobby-item';
import {FooterComponent} from '../../footer';
import {I18nPipe} from '../../../pipes/i18n.pipe';
import {HOBBY_PROJECTS_CONFIG} from '../../../config/hobby-projects.config';
import {SKILLS_CONFIG, SkillConfig} from '../../../config/skills.config';
import {HOBBIES_CONFIG} from '../../../config/hobbies.config';
import {SERVICES_CONFIG} from '../../../config/services.config';

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
        FormsModule,
        I18nPipe
    ],
    templateUrl: './left-container.component.html',
    standalone: true,
    styleUrl: './left-container.component.sass'
})

export class LeftContainerComponent {
    @Input() toggleMode!: (value: Event) => void;
    @Input() darkMode = false;
    @Output() darkModeChange = new EventEmitter<boolean>();

    protected readonly HOBBY_PROJECTS_CONFIG = HOBBY_PROJECTS_CONFIG;
    protected readonly SKILLS_CONFIG = SKILLS_CONFIG;
    protected readonly HOBBIES_CONFIG = HOBBIES_CONFIG;
    protected readonly SERVICES_CONFIG = SERVICES_CONFIG;

    private i18n = inject(I18nService);

    changeLang(lang: string): void {
        this.i18n.switchLanguage(lang);
    }

    getSkillText(skill: SkillConfig): string {
        if (skill.i18nPrefix) {
            return this.i18n.translate(skill.i18nPrefix) + skill.text;
        }
        return skill.text;
    }

    faSun: IconDefinition = faSun;
    faMoon: IconDefinition = faMoon;
    faLayerGroup: IconDefinition = faLayerGroup;
    faLaptopCode: IconDefinition = faLaptopCode;

}
