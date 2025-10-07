// left-title.ts
import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-left-title',
    template: `
        <div class="mt-4 mb-4">
            <h2 [attr.data-i18n]="dataI18n" class="text-uppercase font-weight-bold" [innerHTML]="sanitizedText"></h2>
        </div>
    `,
})

export class LeftTitle {
    @Input() text!: string;
    @Input() dataI18n!: string;

    sanitizedText!: SafeHtml;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnChanges() {
        this.sanitizedText = this.sanitizer.bypassSecurityTrustHtml(this.text || '');
    }
}
