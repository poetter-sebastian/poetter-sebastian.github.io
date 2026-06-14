import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {I18nPipe} from '../../pipes/i18n.pipe';

@Component({
    selector: 'app-hobby-item',
    imports: [
        FaIconComponent,
        I18nPipe,
    ],
    template: `
        <div class="ps-sm-0 ps-5 d-flex align-items-center">
            <fa-icon [icon]="icon" [class]="' ' + ' d-flex justify-content-center align-items-center primary-dark-bg'"></fa-icon>
            <span class="ps-3">{{ dataI18n | i18n }}</span>
        </div>
    `,
})

export class HobbyItem {
    @Input() icon!: IconDefinition;
    @Input() text?: string;
    @Input() dataI18n!: string;
}
