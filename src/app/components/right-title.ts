// right-title.ts
import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-right-title',
    imports: [
        FaIconComponent,
    ],
    template: `
        <h1 class="text-uppercase right-title row g-0 mb-md-3">
            <fa-icon [icon]="icon" class="col-md-4 pe-2 d-none d-md-block"></fa-icon>
            <span class="col-md-8 text-md-start text-sm-center ps-md-4 text-md-start text-center"
                  [attr.data-i18n]="dataI18n" [innerHTML]="sanitizedText"></span>
        </h1>
    `,
})

export class RightTitle {
    @Input() icon!: IconDefinition;
    @Input() text!: string;
    @Input() dataI18n!: string;

    sanitizedText!: SafeHtml;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnChanges() {
        this.sanitizedText = this.sanitizer.bypassSecurityTrustHtml(this.text || '');
    }
}
