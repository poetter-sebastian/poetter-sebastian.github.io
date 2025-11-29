import {Output, Input, EventEmitter, Component} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    faUser,
    faGraduationCap,
    faCircle,
} from '@fortawesome/free-solid-svg-icons';
import {RightTitleComponent} from '../right-title.component';
import {FooterComponent} from '../../footer';
import {CommissionItemComponent} from '../commission-list.component';
import {ProjectListComponent} from '../project-list.component';
import {ExperienceListComponent} from '../experience.list.component';

@Component({
    selector: 'app-right-container',
    host: { 'class': 'col-lg-8 secondary-bg ps-lg-3 p-0' },
    imports: [
        FontAwesomeModule,
        RightTitleComponent,
        FooterComponent,
        ProjectListComponent,
        CommissionItemComponent,
        ExperienceListComponent
    ],
    templateUrl: './right-container.component.html',
    styleUrl: './right-container.component.sass',
    standalone: true
})

export class RightContainerComponent {
    @Input() toggleMode!: (value: Event) => void;
    @Input() changeLang!: (lang: string) => void;
    @Input() ngModel: boolean = false;
    @Output() ngModelChange = new EventEmitter<boolean>();

    faUser: IconDefinition = faUser;
    faGraduationCap: IconDefinition = faGraduationCap;
    faCircle: IconDefinition = faCircle;
}
