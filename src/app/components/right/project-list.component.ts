import { Component, Input } from '@angular/core';
import {ProjectConfig, PROJECT_CONFIG} from '../../config/project.config';
import {RightTitleComponent} from './right-title.component';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faProjectDiagram,} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-project-list',
    imports: [
        RightTitleComponent
    ],
    template: `
        <section>
            <app-right-title [icon]="faProjectDiagram" dataI18n="customerprojects-title" text="Scientifical Work I'm involed in"></app-right-title>
            <div class="row me-0 px-lg-0 px-2">
                @for (project of PROJECTS_CONFIG; track project) {
                    <div class="col-md-6 col-lg-3 mb-4">
                        <a [href]="project.href" class="text-decoration-none" title="{{ project.title }}" target="_blank">
                            <div class="card h-100 pt-3">
                                <img [src]="'/img/projects/'+project.imgSrc" [alt]="project.imgAlt" class="card-img-top">
                                <div class="card-body text-center">
                                    <h5 class="card-title">{{ project.title }}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                }
            </div>
        </section>
    `,
    styles: [`

    `]
})
export class ProjectListComponent {
	protected readonly PROJECTS_CONFIG = PROJECT_CONFIG;
	protected readonly faProjectDiagram: IconDefinition = faProjectDiagram;
}
