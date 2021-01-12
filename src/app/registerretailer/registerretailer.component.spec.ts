import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterretailerComponent } from './registerretailer.component';

describe('RegisterretailerComponent', () => {
  let component: RegisterretailerComponent;
  let fixture: ComponentFixture<RegisterretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterretailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
