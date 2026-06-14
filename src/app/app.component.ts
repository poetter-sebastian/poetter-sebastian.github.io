import {AfterViewInit, Component, inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LeftContainerComponent} from './components/left/left-container/left-container.component';
import {RightContainerComponent} from './components/right/right-container/right-container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ThemeService} from './services/theme.service';
import {I18nService} from './services/i18n.service';
import {ActivatedRoute, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [NgbModule, CommonModule, FontAwesomeModule, FormsModule, LeftContainerComponent, RightContainerComponent, RouterOutlet],
    templateUrl: './app.component.html',
    standalone: true,
    styleUrls: ['./app.component.sass']
})

export class AppComponent implements AfterViewInit {
    title: string = 'poetter-sebastian.github.io';
    prefersDarkScheme: boolean;
    darkMode: boolean = true;

    private activatedRoute = inject(ActivatedRoute);
    private document = inject(DOCUMENT);
    private renderer = inject(Renderer2);
    private i18n = inject(I18nService);

    constructor(private theme: ThemeService) {
        this.prefersDarkScheme = (typeof window !== 'undefined' && window.matchMedia) ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
    }

    ngOnInit() {
        this.theme.applyTheme(this.document);

        const stored = this.theme.current;
        this.darkMode = stored === 'dark';
    }

    ngAfterViewInit(): void {
        if (typeof window !== 'undefined') {
			this.activatedRoute.queryParamMap.subscribe(params => {
				const langParam = params.get('lang');
				if (langParam) {
					this.i18n.switchLanguage(langParam);
				} else {
					this.i18n.switchLanguage(this.i18n.currentLanguage());
				}
			});
			const currentYear = new Date().getFullYear().toString();
			this.document.querySelectorAll('.year').forEach(e => {
				this.renderer.setProperty(e, 'innerHTML', currentYear);
			});
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
}
