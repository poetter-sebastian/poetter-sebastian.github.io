import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {I18nHtmlPipe} from '../../pipes/i18n-html.pipe';

@Component({
    selector: 'app-right-title',
    imports: [
        FaIconComponent,
        I18nHtmlPipe,
    ],
    template: `
        <div class="pt-5 pb-5">
            <h1 class="text-uppercase right-title row g-0 mb-md-3">
                <fa-icon [icon]="icon" class="col-md-4 pe-2 d-none d-md-block"></fa-icon>
                <span class="col-md-8 text-md-start text-sm-center ps-md-4 text-md-start text-center"
                      [innerHTML]="dataI18n | i18nHtml"></span>
            </h1>
        </div>
    `,
})

export class RightTitleComponent {
    @Input() icon!: IconDefinition;
    @Input() text?: string;
    @Input() dataI18n!: string;
}
