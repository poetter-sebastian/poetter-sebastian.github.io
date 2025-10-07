// skill-container.ts
import {Component, Input, HostBinding} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-skill-container',
    imports: [
        FaIconComponent,
    ],
    template: `
        <span>
            <fa-icon [icon]="icon" [class]="iconClass"></fa-icon>
            <span [innerHTML]="sanitizedText"></span>
        </span>
    `,
})

export class SkillContainer {
    @HostBinding('class') class = 'col-12 col-sm-6 col-md-12 col-lg-6';

    @Input() icon!: IconDefinition;
    @Input() text!: string;
    @Input() iconClass!: string;

    sanitizedText!: SafeHtml;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnChanges() {
        this.sanitizedText = this.sanitizer.bypassSecurityTrustHtml(this.text || '');
    }
}
