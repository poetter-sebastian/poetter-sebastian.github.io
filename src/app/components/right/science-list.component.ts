import {Component} from '@angular/core';
import {SCIENCE_CONFIG} from '../../config/science.config';
import {RightTitleComponent} from './right-title.component';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faCircleNodes} from '@fortawesome/free-solid-svg-icons';
import {I18nPipe} from '../../pipes/i18n.pipe';

@Component({
    selector: 'app-science-list',
	imports: [
		RightTitleComponent,
		I18nPipe,
	],
    template: `
        <section class="">
            <app-right-title [icon]="faProjectDiagram" dataI18n="scientific-work-title" text="Scientific Work"></app-right-title>
            <div class="row align-items-strech me-0 mb-4 px-lg-0 px-2">
                @for (scienceEntry of SCIENCE_CONFIG; track scienceEntry;) {
                    <div class="col-md-6 col-lg-4 mb-5">
                        <article class="card h-100 science-card">
                                <div class="card-body d-grid position-relative">
									<div class="d-grid text-center">
										<h5 class="card-title">
											<a class="stretched-link science-card-link" [href]="scienceEntry.href"
												target="_blank" rel="noopener noreferrer nofollow"
												[title]="scienceEntry.title | i18n">{{ scienceEntry.title | i18n }}</a>
										</h5>
									</div>
									<div class="align-content-center text-center mt-auto mb-4">
										<p class="secondary-dark-text">{{ scienceEntry.desc | i18n }}</p>
										<p class="secondary-text">DOI: {{ scienceEntry.doi }}</p>
										<button type="button" class="btn btn-sm bibtex-btn"
										        [class.copied]="copiedDoi === scienceEntry.doi"
										        [title]="copiedDoi === scienceEntry.doi ? 'Copied!' : 'BibTeX'"
										        (click)="copyBibtex($event, scienceEntry.bibtex, scienceEntry.doi)">
											BibTeX
										</button>
									</div>
                                </div>
                        </article>
                    </div>
                }
            </div>
        </section>
    `,
    styles: [`
		.card
			background-image: linear-gradient(var(--secondary-bg-transparent) 0%, var(--primary-bg-transpararent) 40%) !important
		.science-card-link
			text-decoration: none
			color: inherit
			&:focus-visible
				outline: 2px solid currentColor
				outline-offset: 3px
				border-radius: 0.25rem
			&:focus-visible::after
				outline: 2px solid currentColor
				outline-offset: 2px
				border-radius: 0.375rem
		.bibtex-btn
			position: absolute
			bottom: 0.5rem
			left: 0.5rem
			z-index: 2
			opacity: 1
			color: var(--secondary-text)
			background-color: rgba(127, 127, 127, 0.25)
			border: 1px solid currentColor
			border-radius: 0.375rem
			padding: 0.25rem 0.5rem
			font-size: 1rem
			line-height: 1
			cursor: pointer
			fa-icon
				font-size: 1rem
			&:hover
				opacity: 1
				background-color: var(--secondary-light-bg)
			&:focus
				background-color: var(--secondary-bg-transparent)
			&:focus-visible
				outline: 2px solid currentColor
				outline-offset: 2px
    `]
})
export class ScienceListComponent {
	protected readonly SCIENCE_CONFIG = SCIENCE_CONFIG;
	protected readonly faProjectDiagram: IconDefinition = faCircleNodes;
	protected copiedDoi: string | null = null;

	protected copyBibtex(event: MouseEvent, bibtex: string, doi: string): void {
		event.stopPropagation();
		event.preventDefault();
		const text = bibtex.trim();
		if (navigator.clipboard?.writeText) {
			void navigator.clipboard.writeText(text);
		}
		this.copiedDoi = doi;
	}
}
