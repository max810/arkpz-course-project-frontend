import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileDriverComponent } from './profile-driver/profile-driver.component';
import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent, ProfileDriverComponent, ProfileEmployeeComponent, ProfileComponent]
})
export class AdminModule { }
