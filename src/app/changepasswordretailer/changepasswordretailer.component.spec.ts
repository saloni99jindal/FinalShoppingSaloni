import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordretailerComponent } from './changepasswordretailer.component';

describe('ChangepasswordretailerComponent', () => {
  let component: ChangepasswordretailerComponent;
  let fixture: ComponentFixture<ChangepasswordretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordretailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
