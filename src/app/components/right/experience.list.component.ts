import { Component } from '@angular/core';
import { EXPERIENCE_CONFIG } from '../../config/experience.config';
import {RightTitleComponent} from './right-title.component';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
    faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-experience-list',
    template: `
        <section>
            <app-right-title [icon]="faLaptopCode" dataI18n="experience-title" text='Experience (<span id="to-now">9</span> years)'></app-right-title>
            <div class="ms-4 mt-md-0 mt-4">
                <ol class="line">
                    @for (item of experienceConfig; track item.id) {
                        <li [attr.data-i18n]="item.id" [innerHTML]="item.text"></li>
                    }
                </ol>
            </div>
        </section>
    `,
    imports: [
        RightTitleComponent
    ],
    styles: [`
        div
            position: relative
            margin-left: -56px

        /*Line*/
        li::before
            content: ''
            position: absolute
            width: 3px
            background-color: var(--secondary-dark-bg)
            top: 0
            bottom: 0
            left: -20px


        /*Circle*/
        li::after
            text-align: center
            font-weight: bold
            padding-top: 13px
            z-index: 10
            content: counter(item)
            position: absolute
            width: 50px
            height: 50px
            color: var(--primary-dark-text)
            background-color: var(--secondary-dark-bg)
            border-radius: 50%
            top: 0
            left: -43px


        /*Content*/
        li
            counter-increment: item
            padding: 10px 10px
            margin-left: 2.5rem
            min-height: 70px
            position: relative
            background-color: transparent
            list-style: none


        @media (min-width: 768px)
            li
                padding: 10px 10px 0 1.5rem


        li:nth-last-child(1)::before
            width: 0

    `]
})

export class ExperienceListComponent {
    experienceConfig = EXPERIENCE_CONFIG;
    faLaptopCode: IconDefinition = faLaptopCode;
}
