import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'aboutpage', component: AboutpageComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
