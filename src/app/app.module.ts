import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';

import { AuthGuard } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';


@NgModule({
 declarations: [
     AppComponent,
     LoginComponent,
     HomeComponent,
     OverviewComponent
   ],
   imports: [
     BrowserModule,
     FormsModule,
     HttpModule,
     GridModule,
     routing
   ],
   providers: [AuthGuard, AuthenticationService, HttpService, UserService],
   bootstrap: [AppComponent]
})
export class AppModule { }
