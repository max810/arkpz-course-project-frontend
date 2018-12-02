import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { AdminGuard } from './admin.guard';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { EditDroneComponent } from './edit-drone/edit-drone.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          // { path: 'dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard] },
          { path: 'profile', component: ProfileComponent },
          { path: 'add-drone', component: AddDroneComponent, canActivate: [AdminGuard] },
          { path: 'edit-drone/:droneId', component: EditDroneComponent, canActivate: [AdminGuard] },
          // { path: 'profile-user', component: ProfileUserComponent, canActivate: [ProfileTypeGuard] },
          // { path: 'profile-admin', component: ProfileAdminComponent, canActivate: [ProfileTypeGuard] },
          { path: '', redirectTo: '/homepage', pathMatch: 'full' },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
