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
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeLogComponent } from './employee-log/employee-log.component';
import { SecurityNavbarComponent } from './security-navbar/security-navbar.component';
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
component:SearchEmployeeComponent},
{path:"employeelogin",
component:EmployeeLoginComponent},
{path:"profile",
component:EmployeeProfileComponent},
{path:"leave",
component:LeaveApplicationComponent},
{path:"viewleave",
component:LeaveManagementComponent},
{path:"viewemployee",
component:ViewEmployeeComponent},
{path:"employeelog",
component:EmployeeLogComponent}
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
    SearchEmployeeComponent,
    EmployeeLoginComponent,
    EmployeeProfileComponent,
    EmployeeNavbarComponent,
    LeaveApplicationComponent,
    LeaveManagementComponent,
    ViewEmployeeComponent,
    EmployeeLogComponent,
    SecurityNavbarComponent
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
