import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDroneComponent } from './edit-drone/edit-drone.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations:
    [AdminComponent,
      // AdminDashboardComponent,
      ProfileUserComponent,
      ProfileAdminComponent,
      ProfileComponent,
      AddDroneComponent,
      EditDroneComponent
    ]
})
export class AdminModule { }
