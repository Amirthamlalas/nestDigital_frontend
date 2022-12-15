import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SecurityGuardComponent } from './security-guard/security-guard.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { HttpClientModule } from '@angular/common/http';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
const myconst:Routes=[
  {path:"",
component:AdminComponent},
{path:"security",
component:SecurityGuardComponent},
{path:"securitylogin",
component:SecurityLoginComponent},
{path:"visitorlog",
component:VisitorLogComponent},
{path:"addemployee",
component:AddEmployeeComponent},
{path:"searchemployee",
component:SearchEmployeeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    SecurityGuardComponent,
    SecurityLoginComponent,
    VisitorLogComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myconst),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
