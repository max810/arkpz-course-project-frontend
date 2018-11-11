import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'profile', component: ProfileComponent },
          // { path: 'profile-driver', component: ProfileDriverComponent, canActivate: [ProfileTypeGuard] },
          // { path: 'profile-employee', component: ProfileEmployeeComponent, canActivate: [ProfileTypeGuard] },
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
