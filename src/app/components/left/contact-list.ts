import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {LeftTitle} from './left-title';
import {ContactConfig, CONTACTS_CONFIG} from '../../config/contact.config';
import {I18nPipe} from '../../pipes/i18n.pipe';
import {I18nHtmlPipe} from '../../pipes/i18n-html.pipe';

@Component({
    selector: 'app-contact-list',
    imports: [
        FaIconComponent,
        LeftTitle,
        I18nPipe,
        I18nHtmlPipe,
    ],
    template: `
        <app-left-title dataI18n="contact-title" text="Contact"></app-left-title>
        <div id="contact">
            @for (contact of CONTACTS_CONFIG; track contact.href) {
                <div class="row g-0 item">
                    <div class="col-fullhd-6 col-md-3 col-sm-6 col-2 primary-dark-bg">
                        <fa-icon [icon]="contact.icon"></fa-icon>
                    </div>
                    <div class="col-fullhd-6 col-md-9 col-sm-6 col-10 d-flex align-items-center">
                        @if (contact.isHiddenEmail) {
                            <span [innerHTML]="contact.dataI18n | i18nHtml"></span>
                        } @else {
                            <a [href]="getBypassedURL(contact)" target="_blank" [rel]="contact.relString ?? 'noreferrer'">{{ contact.dataI18n | i18n }}</a>
                        }
                    </div>
                </div>
            }
        </div>
    `,
})

export class ContactList{
    protected CONTACTS_CONFIG = CONTACTS_CONFIG;

    constructor(private sanitizer: DomSanitizer) {}

    getBypassedURL(contact: ContactConfig) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(contact.href);
    }
}
