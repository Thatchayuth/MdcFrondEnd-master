import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenCustomerComponent } from './authen-customer.component';

describe('AuthenCustomerComponent', () => {
  let component: AuthenCustomerComponent;
  let fixture: ComponentFixture<AuthenCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
