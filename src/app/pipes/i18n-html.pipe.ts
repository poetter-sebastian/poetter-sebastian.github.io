import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { I18nService } from '../services/i18n.service';

@Pipe({ name: 'i18nHtml', pure: false })
export class I18nHtmlPipe implements PipeTransform {
    private service = inject(I18nService);
    private sanitizer = inject(DomSanitizer);

    transform(key: string): SafeHtml {
        const html = key ? this.service.translate(key) : '';
        // Fallback because I can't fix the X replacement in the translation file yet p.p
        const withYears = html.replace(
            /(<span\s+id="to-now">)X(<\/span>)/i,
            (_, open, close) => `${open}${new Date().getFullYear() - 2015}${close}`
        );
        return this.sanitizer.bypassSecurityTrustHtml(withYears);
    }
}
