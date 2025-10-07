import {Output, Input, EventEmitter, Component} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    faLaptopCode,
    faProjectDiagram,
    faUser,
    faGraduationCap,
    faCircle,
    faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import {RightTitleComponent} from '../right-title.component';
import {FooterComponent} from '../../footer';
import {CommissionItem} from '../commission-item';
import {ProjectCardComponent} from '../project-card.component';

@Component({
    selector: 'app-right-container',
    host: { 'class': 'col-lg-8 secondary-bg ps-lg-3 p-0' },
    imports: [
        FontAwesomeModule,
        RightTitleComponent,
        FooterComponent,
        CommissionItem,
        ProjectCardComponent
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

    faLaptopCode: IconDefinition = faLaptopCode;
    faProjectDiagram: IconDefinition = faProjectDiagram;
    faUser: IconDefinition = faUser;
    faGraduationCap: IconDefinition = faGraduationCap;
    faCircle: IconDefinition = faCircle;
    faAddressBook: IconDefinition = faAddressBook;
}
