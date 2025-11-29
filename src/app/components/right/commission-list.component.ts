import {Component, Input} from '@angular/core';
import {CommissionConfig, COMMISSIONS_CONFIG} from '../../config/commissions.config';
import {RightTitleComponent} from './right-title.component';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faAddressBook,} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-commission-list',
    imports: [
        RightTitleComponent
    ],
    template: `
        <section>
            <app-right-title [icon]="faAddressBook" dataI18n="commissions-title"
                             text="Who employed/commissioned me"></app-right-title>
            <div id="commissions" class="row me-0 px-lg-0 px-2">
                @for (commission of COMMISSIONS_CONFIG; track commission.href) {
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <a [href]="commission.href" class="text-decoration-none">
                            <div class="card h-100">
                                <img [src]="commission.imgSrc" [alt]="commission.imgAlt" class="card-img-top p-2">
                                <div class="card-body text-center">
                                    <h5 class="card-title">{{ commission.cardTitle }}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                }
            </div>
        </section>
    `
})
export class CommissionItemComponent {
    @Input() commission!: CommissionConfig;
    faAddressBook: IconDefinition = faAddressBook;
    protected readonly COMMISSIONS_CONFIG = COMMISSIONS_CONFIG;
}
