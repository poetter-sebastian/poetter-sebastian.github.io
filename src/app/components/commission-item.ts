import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-partner-card',
    standalone: true,
    imports: [NgOptimizedImage],
    template: `
    <div class="col-lg-3 col-md-6 col-12">
      <div class="card">
        <a [href]="href" [title]="title" target="_blank" rel="noreferrer">
          <img class="card-img-top" [src]="imgSrc" [alt]="imgAlt" loading="lazy">
          <div class="card-body">
            <h2 class="card-title text-center font-weight-bold font-smaller">{{ cardTitle }}</h2>
          </div>
        </a>
      </div>
    </div>
  `,
})
export class CommissionItem {
    @Input() href: string = '';
    @Input() title: string = '';
    @Input() imgSrc: string = '';
    @Input() imgAlt: string = '';
    @Input() cardTitle: string = '';
}
