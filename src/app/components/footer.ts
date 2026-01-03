// footer.ts
import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {LeftTitle} from './left/left-title';
import {
    faCopyright,
    faBook,
    faThumbsUp
} from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalImprintComponent} from './modal-content/modal-imprint.component';
import {ModalPrivacyComponent} from './modal-content/modal-privacy.component';
import {RightTitleComponent} from './right/right-title.component';

@Component({
    selector: 'app-footer',
    imports: [
        FaIconComponent,
        LeftTitle,
        RightTitleComponent,
    ],
    template: `
        <div class="footer" [class]="isDesktop ? 'd-none d-md-block' : 'd-sm-block d-md-none'">
            <!-- Desktop title -->
            @if (isDesktop) {
                <app-left-title dataI18n="footer-title" text="Imprint"></app-left-title>
            } @else {
                <!-- Mobile title -->
                <app-right-title dataI18n="footer-title" text="Imprint" [icon]="copyrightIcon"></app-right-title>
            }

            <!-- Copyright section -->
            <div class="pt-4 pb-3" [class.primary-dark-bg]="isDesktop">
                <p class="text-uppercase font-weight-bold text-center">
                    <fa-icon [icon]="copyrightIcon"></fa-icon> 2019-<span class="year">{{currentYear}}</span> – <span data-i18n="footer-copyright"> by Sebastian Poetter</span>
                </p>
            </div>

            <!-- Privacy policy section -->
            <div class="pt-4 pb-3" [class.primary-dark-bg]="!isDesktop">
                <p class="text-uppercase font-weight-bold text-center">
                    <fa-icon [icon]="privacyIcon"></fa-icon>
                    <span class="ps-1" data-i18n="footer-policy" (click)="openPrivacyModal()" style="cursor:pointer;">privacy policy</span>
                </p>
            </div>

            <!-- Libraries section -->
            <div class="pt-4 pb-3" [class.primary-dark-bg]="isDesktop">
                <p class="text-uppercase font-weight-bold text-center">
                    <fa-icon [icon]="libraryIcon"></fa-icon>
                    <span class="ps-1" data-i18n="footer-library" (click)="openLibraryModal()" style="cursor:pointer;">Used libraries</span>
                </p>
            </div>
        </div>
    `,
})

export class FooterComponent {
    @Input() isDesktop: boolean = true;

    copyrightIcon: IconDefinition = faCopyright;
    privacyIcon: IconDefinition = faBook;
    libraryIcon: IconDefinition = faThumbsUp;

    currentYear: string = new Date().getFullYear().toString();


    constructor(private modalService: NgbModal) {}

    openPrivacyModal() {
        const modalRef = this.modalService.open(ModalPrivacyComponent, {
            size: 'lg',
            centered: true,
        });
        modalRef.componentInstance.title = 'Privacy Policy';
    }

    openLibraryModal() {
        const modalRef = this.modalService.open(ModalImprintComponent, {
            size: 'lg',
            centered: true,
        });
        modalRef.componentInstance.title = 'Used Libraries';
    }

}
