// project-item.ts
import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-project-item',
    imports: [
        FaIconComponent,
    ],
    template: `
        <div class="row g-0">
            <div class="col-xl-4 col-lg-3 col-sm-3 col-2 text-end">
                <fa-icon [icon]="icon"></fa-icon>
            </div>
            <div class="col-xl-8 col-lg-9 col-sm-9 col-10 text-start primary-dark-bg">
                <a [href]="href"><span class="project" [attr.data-i18n]="dataI18n">{{text}}</span></a>
            </div>
        </div>
    `,
})

export class ProjectItem {
    @Input() icon!: IconDefinition;
    @Input() text!: string;
    @Input() dataI18n?: string;
    @Input() href!: string;
}
