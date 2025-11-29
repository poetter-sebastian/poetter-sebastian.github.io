// service-item.ts
import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-service-item',
    imports: [
        FaIconComponent,
    ],
    template: `
        <div class="row g-0 item">
            <div class="col-xxl-8 col-sm-9 col-10 text-end pe-0 primary-dark-bg">
                <span [attr.data-i18n]="dataI18n">{{text}}</span>
            </div>
            <div class="col-xl-2 col-lg-3 col-2 text-start primary-dark-bg">
                <fa-icon [icon]="icon"></fa-icon>
            </div>
        </div>
    `,
})

export class ServiceItem {
    @Input() icon!: IconDefinition;
    @Input() text!: string;
    @Input() dataI18n?: string;
}
