import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileretailerComponent } from './profileretailer.component';

describe('ProfileretailerComponent', () => {
  let component: ProfileretailerComponent;
  let fixture: ComponentFixture<ProfileretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileretailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
