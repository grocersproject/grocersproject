import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDeleteProductComponent } from './admin-delete-product/admin-delete-product.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminViewRequestComponent } from './admin-view-request/admin-view-request.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"\admin",component:AdminPanelComponent},
  {path:"\admin_dashboard",component:AdminDashboardComponent},
  {path:"\User",component:UserComponent},
  {path:"\employee",component:EmployeeComponent},
  {path:"\addProduct",component:AdminAddProductComponent},
  {path:"\deleteProduct",component:AdminDeleteProductComponent},
  {path:"\productUpdate",component:AdminUpdateProductComponent},
  {path:"\employeeViewRequest",component:AdminViewRequestComponent},
  // {path:"\viewEmployeeRequest",component:AdminViewRequestComponent},
  {path:"**",component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }