import { Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {I18nPipe} from '../../pipes/i18n.pipe';

@Component({
    selector: 'app-modal-content',
    templateUrl: 'modal-imprint.html',
    standalone: true,
    imports: [I18nPipe],
})

export class ModalImprintComponent {
    constructor(public modal: NgbActiveModal) {
    }
}
