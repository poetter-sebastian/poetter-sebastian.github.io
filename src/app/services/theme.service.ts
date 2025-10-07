import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly key = 'theme';

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    get current(): 'dark' | 'light' {
        if (isPlatformBrowser(this.platformId)) {
            return (localStorage.getItem(this.key) as 'dark' | 'light') ?? 'light';
        }
        // During SSR, default to light theme (or any safe fallback)
        return 'light';
    }

    set current(theme: 'dark' | 'light') {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(this.key, theme);
        }
    }
}
