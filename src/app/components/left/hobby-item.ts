// hobby-item.ts
import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-hobby-item',
    imports: [
        FaIconComponent,
    ],
    template: `
        <div class="ps-sm-0 ps-5">
            <fa-icon [icon]="icon" [class]="iconClass + ' primary-dark-bg'"></fa-icon>
            <span class="ps-3" [attr.data-i18n]="dataI18n">{{text}}</span>
        </div>
    `,
})

export class HobbyItem {
    @Input() icon!: IconDefinition;
    @Input() text!: string;
    @Input() dataI18n?: string;
    @Input() iconClass: string = 'p-3'; // Default padding class
}
