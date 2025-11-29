import { Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    templateUrl: 'modal-imprint.html',
})

export class ModalImprintComponent {
    constructor(public modal: NgbActiveModal) {
    }
}
