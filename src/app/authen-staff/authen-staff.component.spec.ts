import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenStaffComponent } from './authen-staff.component';

describe('AuthenStaffComponent', () => {
  let component: AuthenStaffComponent;
  let fixture: ComponentFixture<AuthenStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
