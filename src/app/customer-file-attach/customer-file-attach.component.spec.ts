import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFileAttachComponent } from './customer-file-attach.component';

describe('CustomerFileAttachComponent', () => {
  let component: CustomerFileAttachComponent;
  let fixture: ComponentFixture<CustomerFileAttachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFileAttachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFileAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
