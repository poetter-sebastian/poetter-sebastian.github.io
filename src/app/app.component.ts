import {AfterViewInit, Component, inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LeftContainerComponent} from './components/left/left-container/left-container.component';
import {RightContainerComponent} from './components/right/right-container/right-container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ThemeService} from './services/theme.service';
import {i18n} from './lang/i18n';
import {ActivatedRoute, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [NgbModule, CommonModule, FontAwesomeModule, FormsModule, LeftContainerComponent, LeftContainerComponent, LeftContainerComponent, RightContainerComponent, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})

export class AppComponent implements AfterViewInit {
    title: string = 'poetter-sebastian.github.io';
    currentLanguage: string;
    prefersDarkScheme: boolean;
    darkMode: boolean = true;

    private activatedRoute = inject(ActivatedRoute);
    private document = inject(DOCUMENT);
    private renderer = inject(Renderer2);

    constructor(private theme: ThemeService) {
        this.prefersDarkScheme = (typeof window !== 'undefined' && window.matchMedia)
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : false;

        this.currentLanguage = (typeof navigator === 'undefined' || !navigator.language) ? 'en' : navigator.language;
    }

    ngOnInit() {
        this.theme.applyTheme(this.document);

        const stored = this.theme.current;
        this.darkMode = stored === 'dark';

        this.activatedRoute.queryParamMap.subscribe(params => {
            const langParam = params.get('lang');
            if (langParam) {
                const tempLang = i18n.find(lang => lang.language.includes(langParam))?.language;
                if (tempLang) {
                    this.currentLanguage = tempLang;
                    this.changeLang(this.currentLanguage);
                }
            }
        });
    }

    ngAfterViewInit(): void {
        if (typeof window !== 'undefined') {
            let toNow = this.document.getElementById('to-now') ?? null;

            if (toNow !== null) {
                this.renderer.setProperty(toNow, 'innerText', (new Date().getFullYear() - new Date(2015, 0).getFullYear()).toString());
            }

            let currentYear = new Date().getFullYear().toString()

            this.document.querySelectorAll('.year').forEach(e => {
                this.renderer.setProperty(e, 'innerHTML', currentYear);
            });

            this.changeLang(this.currentLanguage);
        }
    }

    onToggleMode = (e: Event): void => {
        const inputElement = e.target as HTMLInputElement;
        if (inputElement) {
            this.darkMode = !this.darkMode;

            if (this.darkMode) {
                this.renderer.addClass(this.document.body, 'dark-theme');
                this.renderer.removeClass(this.document.body, 'light-theme');
                this.theme.current = 'dark';
            } else {
                this.renderer.addClass(this.document.body, 'light-theme');
                this.renderer.removeClass(this.document.body, 'dark-theme');
                this.theme.current = 'light';
            }
        }
    }

    changeLang = (lang: string): void => {
        this.currentLanguage = lang
        this.document.documentElement.lang = lang

        let selectedLang = (i18n.find(lang => this.currentLanguage.includes(lang.language))?.translations ?? {}) as Record<string, string>

        this.document.querySelectorAll('[data-i18n]')?.forEach(value => {
            let currentObj = value.getAttribute('data-i18n') ?? '';
            if (typeof selectedLang[currentObj] !== 'undefined') {
                this.renderer.setProperty(value, 'innerHTML', selectedLang[currentObj]);
            } else {
                console.log('"' + currentObj + '" in language json not found!');
            }
        });
    }

    private logElements(): void {
        this.document.querySelectorAll('[data-i18n]')?.forEach(function (value) {
            console.log('"' + value.getAttribute('data-i18n') + '":"' + value.innerHTML + '",');
        });
    }
}
