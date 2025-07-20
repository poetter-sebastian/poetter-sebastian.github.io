// footer.ts
import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {LeftTitle} from './left-title';
import {
    faCopyright,
    faBook,
    faThumbsUp,
    faAddressCard
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-footer',
    imports: [
        FaIconComponent,
        LeftTitle,
    ],
    template: `
        <div class="footer" [class]="isDesktop ? 'd-none d-md-block' : 'd-sm-block d-md-none'">
            <!-- Desktop title -->
            @if (isDesktop) {
                <app-left-title dataI18n="footer-title" text="Imprint"></app-left-title>
            } @else {
                <!-- Mobile title -->
                <h1 class="text-uppercase right-title row g-0">
                    <fa-icon [icon]="mobileHeaderIcon"></fa-icon>
                    <i class="col-md-4 pe-2 fas fa-address-card d-none d-md-block"></i>
                    <span class="col-md-8 text-md-start text-center ps-md-4 pt-4 pb-3" data-i18n="footer-title">Imprint</span>
                </h1>
            }

            <!-- Copyright section -->
            <div class="pt-4 pb-3" [class.primary-dark-bg]="isDesktop">
                <p class="text-uppercase font-weight-bold text-center">
                    <fa-icon [icon]="copyrightIcon"></fa-icon> 2019-<span class="year">{{currentYear}}</span> <span data-i18n="footer-copyright"> by Sebastian Poetter</span>
                </p>
            </div>

            <!-- Privacy policy section -->
            <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">
                <div class="pt-4 pb-3" [class.primary-dark-bg]="!isDesktop">
                    <p class="text-uppercase font-weight-bold text-center">
                        <fa-icon [icon]="privacyIcon"></fa-icon> <span data-i18n="footer-policy"> privacy policy</span>
                    </p>
                </div>
            </a>

            <!-- Libraries section -->
            <a href="#" data-bs-toggle="modal" data-bs-target="#libraryModal">
                <div class="pt-4 pb-3" [class.primary-dark-bg]="isDesktop">
                    <p class="text-uppercase font-weight-bold text-center">
                        <fa-icon [icon]="libraryIcon"></fa-icon> <span data-i18n="footer-library"> Used libraries</span>
                    </p>
                </div>
            </a>
        </div>
    `,
})

export class FooterComponent {
    @Input() isDesktop: boolean = true;

    copyrightIcon: IconDefinition = faCopyright;
    privacyIcon: IconDefinition = faBook;
    libraryIcon: IconDefinition = faThumbsUp;
    mobileHeaderIcon: IconDefinition = faAddressCard;

    currentYear: string = new Date().getFullYear().toString();
}
