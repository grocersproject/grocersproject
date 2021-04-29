import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDeleteProductComponent } from './admin-delete-product/admin-delete-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminViewRequestComponent } from './admin-view-request/admin-view-request.component';
import { AddEmployeeComponentComponent } from './add-employee-component/add-employee-component.component';
import { DeleteEmployeeComponentComponent } from './delete-employee-component/delete-employee-component.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    HomePageComponent,
    AdminDashboardComponent,
    AdminPanelComponent,
    AdminAddProductComponent,
    AdminDeleteProductComponent,
    AdminUpdateProductComponent,
    AdminViewRequestComponent,
    AddEmployeeComponentComponent,
    DeleteEmployeeComponentComponent,
    DashboardUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }