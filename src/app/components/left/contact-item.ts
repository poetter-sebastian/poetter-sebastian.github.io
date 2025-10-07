// contact-item.ts
import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-contact-item',
    imports: [
        FaIconComponent,
    ],
    template: `
        <div class="row g-0">
            <div class="col-md-3 col-sm-6 col-2 primary-dark-bg">
                <fa-icon [icon]="icon"></fa-icon>
            </div>
            <div class="col-md-9 col-sm-6 col-10">
                @if (isHiddenEmail) {
                    <span class="d-none">
                        <a [href]="'mailto:email&#64;domain.com'"></a>email&#64;domain.com
                    </span>
                }
                <a [href]="hrefString" target="_blank" [rel]="relString" [attr.data-i18n]="dataI18n || null" [innerHTML]="sanitizedText"></a>
            </div>
        </div>
    `,
})

export class ContactItem {
    @Input() icon: IconDefinition = faEnvelope;
    @Input() text!: string;
    @Input() dataI18n: string = "";
    @Input() hrefString: string = "";
    @Input() relString: string = "noreferrer";
    @Input() isHiddenEmail: boolean = false;

    sanitizedText!: SafeHtml;

    constructor(private sanitizer: DomSanitizer) {}

    ngOnChanges() {
        this.sanitizedText = this.sanitizer.bypassSecurityTrustHtml(this.text || '');
    }

}
