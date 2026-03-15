import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {LeftTitle} from './left-title';
import {ContactConfig, CONTACTS_CONFIG} from '../../config/contact.config';

@Component({
    selector: 'app-contact-list',
    imports: [
        FaIconComponent,
        LeftTitle,
    ],
    template: `
        <app-left-title dataI18n="contact-title" text="Contact"></app-left-title>
        <div id="contact">
            @for (contact of CONTACTS_CONFIG; track contact.href) {
                <div class="row g-0 item">
                    <div class="col-md-3 col-sm-6 col-2 primary-dark-bg">
                        <fa-icon [icon]="contact.icon"></fa-icon>
                    </div>
                    <div class="col-md-9 col-sm-6 col-10 d-flex align-items-center">
                        @if (contact.isHiddenEmail) {
                            <span class="d-none">
                                <a [href]="'mailto:email&#64;domain.com'"></a>email&#64;domain.com
                            </span>
                            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#101;&#98;&#45;&#112;&#111;&#101;&#116;%74%65%72%40%67%6D%78%2E%64%65" target="_blank" [rel]="contact.relString ?? 'noreferrer'" [attr.data-i18n]="contact.dataI18n || null">{{contact.text}}</a>
                        } @else {
                            <a [href]="getBypassedURL(contact)" target="_blank" [rel]="contact.relString ?? 'noreferrer'" [attr.data-i18n]="contact.dataI18n || null">{{contact.text}}</a>
                        }
                    </div>
                </div>
            }
        </div>
    `,
})

export class ContactList{
    @Input() currentLanguage: string = "";

    protected CONTACTS_CONFIG = CONTACTS_CONFIG;

    constructor(private sanitizer: DomSanitizer) {}

    getBypassedURL(contact: ContactConfig) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(contact.href);
    }
}
