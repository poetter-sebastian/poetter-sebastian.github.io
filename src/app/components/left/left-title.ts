import {Component, Input} from '@angular/core';
import {I18nHtmlPipe} from '../../pipes/i18n-html.pipe';

@Component({
    selector: 'app-left-title',
    imports: [
        I18nHtmlPipe,
    ],
    template: `
        <div class="mt-4 mb-4">
            <h2 class="text-uppercase">
                <span class="col-md-8 text-md-start text-sm-center ps-md-4 text-md-start text-center"
                      [innerHTML]="text || (dataI18n | i18nHtml)"></span>
            </h2>
        </div>
    `,
})

export class LeftTitle {
    @Input() text?: string;
    @Input() dataI18n!: string;
}
