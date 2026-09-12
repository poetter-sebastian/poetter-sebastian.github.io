import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EDUCATION_CONFIG } from '../../config/education.config';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { I18nHtmlPipe } from '../../pipes/i18n-html.pipe';
import { RightTitleComponent } from './right-title.component';

@Component({
    selector: 'app-education-list',
    imports: [
        RightTitleComponent,
        FontAwesomeModule,
        I18nPipe,
        I18nHtmlPipe
    ],
    template: `
        <section>
            <app-right-title [icon]="faGraduationCap" dataI18n="education-title"></app-right-title>
            <div class="container">
                <ol class="list-unstyled timeline">
                    @for (entry of EDUCATION_CONFIG; track $index) {
                        <li>
                            @if (entry.titleIsHtml) {
                                <h2 class="mt-c" [innerHTML]="entry.titleKey | i18nHtml"></h2>
                            } @else {
                                <h2><span>{{ entry.titleKey | i18n }}</span>@if (entry.year) { - {{ entry.year }} }</h2>
                            }
                            <p [innerHTML]="entry.textKey | i18nHtml"></p>
                            @if (entry.subjects?.length) {
                                <p class="mb-0"><span>{{ entry.subjectsTitleKey! | i18n }}</span>:</p>
                                <ul [class]="entry.subjectListClass || 'lul'">
                                    @for (subject of entry.subjects; track $index) {
                                        <li>
                                            @if (entry.subjectListClass === 'lur') {
                                                <fa-icon [icon]="faCircle" class="t-list-l"></fa-icon>
                                            } @else {
                                                <fa-icon [icon]="faCircle"></fa-icon>
                                            }
                                            @if (subject.isHtml) {
                                                <span [innerHTML]="subject.i18nKey | i18nHtml"></span>
                                            } @else {
                                                <span>{{ subject.i18nKey | i18n }}</span>
                                            }
                                            @if (entry.subjectListClass === 'lur') {
                                                <fa-icon [icon]="faCircle" class="t-list-r"></fa-icon>
                                            }
                                        </li>
                                    }
                                </ul>
                            }
                        </li>
                    }
                </ol>
            </div>
        </section>
    `,
	styles: [`
		.lul
			list-style: none !important
			padding-left: 1.5em
		.lur
			list-style: none !important
			padding-right: 1.5em

		.lul
			li > span
				padding-left: 5px
		.lur
			li > span
				padding-right: 5px

		.t-list-r
			display: none !important
		.t-list-l
			display: inline-block !important
			margin-left: -15px
		.mt-c
			margin-top: 1rem
		@media (min-width: 1450px)
			.mt-c
				margin: 0
			.t-list-r
				display: inline-block !important
			.t-list-l
				display: none !important
			.timeline
				margin-left: 5rem
				&:before, &:after
					content: ""
					background: var(--secondary-bg)
					width: 5px
					height: 60px
					position: absolute
					z-index: 2
					margin: 0 0 0 -1px

				&:after
					height: 90px
					margin: -80px 0 0 -1px
				>li
					border: 2px solid
					border-color: var(--secondary-text) !important
					margin: 0 0 -2px 0
					padding: 30px
					counter-increment: li
					position: relative
					width: 42rem

					&:nth-child(odd):before, &:nth-child(even):before
						content: counter(li)
						display: flex
						-ms-flex-pack: center!important
						justify-content: center!important
						-ms-flex-align: center!important
						align-items: center!important

						position: absolute
						border-radius: 50%
						height: 50px
						width: 50px
						background-color: var(--secondary-dark-bg)
						color: var(--secondary-dark-text)
						font-weight: bold
						z-index: 3

					&:nth-child(odd):before
						right: 100%
						margin-right: -25px

					&:nth-child(even):before
						left: 100%
						margin-left: -25px

					&:nth-child(odd)
						border-right: none
						border-left: 2px solid
						border-top-left-radius: 10px
						border-bottom-left-radius: 10px
						margin-right: 30px
						padding-right: 0

					&:nth-child(even)
						border-left: none
						border-right: 2px solid
						border-top-right-radius: 10px
						border-bottom-right-radius: 10px
						margin-left: 30px
						padding-left: 0
						text-align: right

					&:first-child
						border-top: none
						border-top-right-radius: 0
						border-top-left-radius: 0

					&:last-child
						border-bottom: none
						border-bottom-right-radius: 0
						border-bottom-left-radius: 0
    `]
})
export class EducationListComponent {
    protected readonly EDUCATION_CONFIG = EDUCATION_CONFIG;
    protected readonly faCircle: IconDefinition = faCircle;
    protected readonly faGraduationCap: IconDefinition = faGraduationCap;
}
