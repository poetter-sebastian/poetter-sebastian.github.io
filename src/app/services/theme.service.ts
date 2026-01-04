import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly key = 'theme';

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    get current(): 'dark' | 'light' | null {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem(this.key) as 'dark' | 'light' | null;
        }
        return null;
    }

    set current(theme: 'dark' | 'light' | null) {
        if (isPlatformBrowser(this.platformId)) {
            if (theme) {
                localStorage.setItem(this.key, theme);
            } else {
                localStorage.removeItem(this.key);
            }
        }
    }

    applyTheme(document: Document): void {
        if (isPlatformBrowser(this.platformId)) {
            const storedTheme = this.current;
            if (storedTheme) {
                // User has explicitly chosen a theme
                document.body.classList.add(storedTheme + '-theme');
                document.body.classList.remove(storedTheme === 'dark' ? 'light-theme' : 'dark-theme');
            } else {
                // Let the system preference take over
                document.body.classList.remove('dark-theme', 'light-theme');
            }
        }
    }
}
