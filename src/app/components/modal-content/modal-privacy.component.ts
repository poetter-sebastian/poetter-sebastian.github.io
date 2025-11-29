import { Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    templateUrl: 'modal-privacy.html',
})

export class ModalPrivacyComponent {
    constructor(public modal: NgbActiveModal) {
    }
}
