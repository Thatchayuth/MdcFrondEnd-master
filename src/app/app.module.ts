import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenCustomerComponent } from './authen-customer/authen-customer.component';
import { AuthenStaffComponent } from './authen-staff/authen-staff.component';
import { CustomerSelectLocationComponent } from './customer-select-location/customer-select-location.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { CustomerInputComponent } from './customer-input/customer-input.component';
import { CustomerFileAttachComponent } from './customer-file-attach/customer-file-attach.component';
import { RouterModule }from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AuthenCustomerComponent,
    AuthenStaffComponent,
    CustomerSelectLocationComponent,
    CustomerMainComponent,
    CustomerInputComponent,
    CustomerFileAttachComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([    
      { path: '', component: AuthenCustomerComponent, pathMatch: 'full' },
      { path: 'authen-customer', component: AuthenCustomerComponent },
      { path: 'authen-staff', component: AuthenStaffComponent },
      { path: 'customer-select-location', component: CustomerSelectLocationComponent },
      { path: 'customer-main', component: CustomerMainComponent },
      { path: 'customer-input', component: CustomerInputComponent },
      { path: 'customer-file-attach', component: CustomerFileAttachComponent },
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
