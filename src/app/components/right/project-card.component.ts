import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [],
    host: { 'class': 'col-lg-3 col-md-6 col-12' },
    template: `
        <div class="card" style="background-color: aqua">
            <a [href]="href" title="{{ title }}" target="_blank" rel="noreferrer">
                <img
                    class="card-img-top"
                    [src]="imgSrc"
                    [alt]="imgAlt"
                    loading="lazy"
                />
                <div class="card-body">
                    <h2 class="card-title text-center font-weight-bold {{ titleClass }}">
                        {{ title }}
                    </h2>
                </div>
            </a>
        </div>
    `,
})

export class ProjectCardComponent {
    @Input() href!: string;
    @Input() imgSrc!: string;
    @Input() imgAlt!: string;
    @Input() title!: string;
    @Input() titleClass: string = 'font-smaller';
}
