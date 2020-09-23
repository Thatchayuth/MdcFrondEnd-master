import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSelectLocationComponent } from './customer-select-location.component';

describe('CustomerSelectLocationComponent', () => {
  let component: CustomerSelectLocationComponent;
  let fixture: ComponentFixture<CustomerSelectLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSelectLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSelectLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
