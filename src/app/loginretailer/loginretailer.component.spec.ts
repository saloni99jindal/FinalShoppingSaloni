import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginretailerComponent } from './loginretailer.component';

describe('LoginretailerComponent', () => {
  let component: LoginretailerComponent;
  let fixture: ComponentFixture<LoginretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginretailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
