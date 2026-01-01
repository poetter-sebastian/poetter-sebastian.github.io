import {AfterViewInit, Component, inject} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LeftContainerComponent} from './components/left/left-container/left-container.component';
import {RightContainerComponent} from './components/right/right-container/right-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

    currentTheme?: string | null;
    prefersDarkScheme: boolean;
    darkMode: boolean = true;

    private activatedRoute = inject(ActivatedRoute);

    constructor(private theme: ThemeService) {
        this.prefersDarkScheme = (typeof window !== 'undefined' && window.matchMedia)
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : false;

        this.currentLanguage = (typeof navigator === 'undefined' || !navigator.language) ? 'en' : navigator.language;
    }

    ngOnInit() {
        const stored = this.theme.current;
        this.darkMode = stored === 'dark';
        this.applyTheme();

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
        this.currentLanguage = lang
        document.documentElement.lang = lang

        let selectedLang = (i18n.find(lang => this.currentLanguage.includes(lang.language))?.translations ?? {}) as Record<string, string>

        document.querySelectorAll('[data-i18n]')?.forEach(function (value) {
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
        document.querySelectorAll('[data-i18n]')?.forEach(function (value) {
            console.log('"' + value.getAttribute('data-i18n') + '":"' + value.innerHTML + '",');
        });
    }

    private applyTheme() {
        if(typeof document !== 'undefined') {
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

}
