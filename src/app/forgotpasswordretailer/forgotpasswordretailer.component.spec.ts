import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordretailerComponent } from './forgotpasswordretailer.component';

describe('ForgotpasswordretailerComponent', () => {
  let component: ForgotpasswordretailerComponent;
  let fixture: ComponentFixture<ForgotpasswordretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpasswordretailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
