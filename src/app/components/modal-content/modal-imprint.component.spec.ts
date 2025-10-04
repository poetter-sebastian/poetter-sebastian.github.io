import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImprintComponent } from './modal-imprint.component';

describe('ModalContentComponent', () => {
  let component: ModalImprintComponent;
  let fixture: ComponentFixture<ModalImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalImprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
