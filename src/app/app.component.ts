import {AfterViewInit, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import {i18n} from './lang/i18n';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LeftContainerComponent} from './components/left/left-container/left-container.component';
import {RightContainerComponent} from './components/right/right-container/right-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ThemeService} from './services/theme.service';


@Component({
    selector: 'app-root',
    imports: [NgbModule,CommonModule, RouterOutlet, FontAwesomeModule, FormsModule, LeftContainerComponent, LeftContainerComponent, LeftContainerComponent, RightContainerComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})

export class AppComponent implements AfterViewInit {
    title: string = 'poetter-sebastian.github.io';
    currentLanguage: string;
    langElements!: NodeListOf<HTMLElement>;

    currentTheme?: string | null;
    prefersDarkScheme: boolean;
    darkMode: boolean = true

    constructor(private theme: ThemeService, @Inject(PLATFORM_ID) private platformId: Object) {
        this.prefersDarkScheme = (typeof window !== 'undefined' && window.matchMedia)
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : false;
        this.currentLanguage = (typeof navigator === 'undefined' || !navigator.language) ? 'en' : navigator.language;
    }

    ngOnInit() {
        const stored = this.theme.current;
        this.darkMode = stored === 'dark';
        this.applyTheme();
    }

    ngAfterViewInit(): void {
        if (this.theme.current === 'dark') {
            document.body.classList.add('dark-theme');
        } else if (this.currentTheme === 'light') {
            document.body.classList.add('light-theme');
        }

        if (typeof window !== 'undefined') {
            let toNow = document.getElementById('to-now') ?? null;
            if (toNow !== null) {
                toNow.innerText = (new Date().getFullYear() - new Date(2015, 0).getFullYear()).toString()
            }

            let currentYear = new Date().getFullYear().toString()
            document.querySelectorAll('.year').forEach(function (e) {
                e.innerHTML = currentYear;
            })

            this.langElements = document.querySelectorAll('[data-i18n]');
            this.changeLang(this.currentLanguage);
        }
    }

    onToggleMode = (e: Event): void => {
        const inputElement = e.target as HTMLInputElement;
        if (inputElement) {
            this.darkMode = !this.darkMode;
            document.body.classList.toggle('dark-theme', this.darkMode);
            document.body.classList.toggle('light-theme', !this.darkMode);
            this.theme.current = this.darkMode ? 'dark' : 'light';
        }
    }

    changeLang = (lang: string): void => {
        document.documentElement.lang = lang
        this.currentLanguage = lang
        let selectedLang = (i18n.find(lang => lang.language === this.currentLanguage)?.translations ?? {}) as Record<string, string>
        this.langElements?.forEach(function (value) {
            let currentObj = value.getAttribute('data-i18n') ?? '';
            if (typeof selectedLang[currentObj] !== 'undefined') {
                value.innerHTML = selectedLang[currentObj];
            } else {
                //debug purpose only
                console.log('"' + currentObj + '" in language json not found!')
            }
        });
    }

    private logElements(): void {
        this.langElements.forEach(function (value) {
            console.log('"' + value.getAttribute('data-i18n') + '":"' + value.innerText + '",');
        });
    }

    private applyTheme() {
        if (this.darkMode) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            this.theme.current = 'dark';
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            this.theme.current = 'light';
        }
    }

}
