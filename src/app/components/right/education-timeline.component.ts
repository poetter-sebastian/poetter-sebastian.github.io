import { Component } from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {EDUCATION_CONFIG} from '../../config/education.config';
import {I18nPipe} from '../../pipes/i18n.pipe';
import {I18nHtmlPipe} from '../../pipes/i18n-html.pipe';

@Component({
    selector: 'app-education-timeline',
    imports: [
        FontAwesomeModule,
        I18nPipe,
        I18nHtmlPipe
    ],
    template: `
        <ol class="list-unstyled timeline">
            @for (entry of EDUCATION_CONFIG; track $index) {
                <li>
                    @if (entry.titleIsHtml) {
                        <h2 class="mt-c" [innerHTML]="entry.titleKey | i18nHtml"></h2>
                    } @else {
                        <h2><span>{{ entry.titleKey | i18n }}</span> - {{ entry.year }}</h2>
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
    `
})

export class EducationTimelineComponent {
    protected readonly EDUCATION_CONFIG = EDUCATION_CONFIG;
    protected readonly faCircle: IconDefinition = faCircle;
}
