import {Component} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {RightTitleComponent} from '../right-title.component';
import {FooterComponent} from '../../footer';
import {CommissionItemComponent} from '../commission-list.component';
import {ProjectListComponent} from '../project-list.component';
import {ExperienceListComponent} from '../experience.list.component';
import {I18nHtmlPipe} from '../../../pipes/i18n-html.pipe';
import {ScienceListComponent} from '../science-list.component';
import {EducationListComponent} from '../education-list.component';

@Component({
    selector: 'app-right-container',
    host: { 'class': 'col-lg-8 secondary-bg ps-lg-3 p-0' },
	imports: [
		RightTitleComponent,
		FooterComponent,
		ProjectListComponent,
		CommissionItemComponent,
		ExperienceListComponent,
		I18nHtmlPipe,
		ScienceListComponent,
		EducationListComponent,
	],
    templateUrl: './right-container.component.html',
    styleUrl: './right-container.component.sass',
    standalone: true
})

export class RightContainerComponent {
    faUser: IconDefinition = faUser;
}
