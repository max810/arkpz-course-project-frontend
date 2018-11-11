import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { arkpzAPI, API_BASE_URL } from './services/arkpz-api';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
// import { AuthModule } from 'auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        AboutpageComponent,
        PageNotFoundComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AdminModule,
        // AuthModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ],
    providers: [
        arkpzAPI,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    
 }
