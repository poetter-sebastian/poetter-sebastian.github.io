import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { i18n } from '../config/i18n';

export type SupportedLanguage = 'en' | 'de' | 'fr';

@Injectable({ providedIn: 'root' })
export class I18nService {
    private readonly allTranslations = i18n;
    private currentLang = signal<SupportedLanguage>('en');

    readonly currentLanguage = this.currentLang.asReadonly();

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.detectBrowserLanguage();
    }

    private detectBrowserLanguage(): void {
        if (isPlatformBrowser(this.platformId)) {
            const navLang = navigator.language?.split('-')[0] ?? '';
            if (this.isSupported(navLang)) {
                this.currentLang.set(navLang as SupportedLanguage);
            }
        }
    }

    private isSupported(lang: string): lang is SupportedLanguage {
        return lang in this.allTranslations;
    }

    translate(key: string): string {
		const lang = this.currentLang();
		let ret = this.allTranslations[lang]?.[key];
		if(ret === undefined) {
			console.error(`Translation for key '${key}' not found in language '${lang}'`);
		}
        return ret ?? key;
    }

    switchLanguage(lang: string): void {
        if (this.isSupported(lang)) {
            this.currentLang.set(lang as SupportedLanguage);
            if (isPlatformBrowser(this.platformId)) {
                document.documentElement.lang = lang;
                const title = this.translate('page-title');
                if (title) {
                    document.title = title;
                }
            }
        }
    }
}
