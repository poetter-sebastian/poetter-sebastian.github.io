import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Pipe({ name: 'i18n', pure: false })
export class I18nPipe implements PipeTransform {
    private service = inject(I18nService);

    transform(key: string): string {
        return key ? this.service.translate(key) : '';
    }
}
