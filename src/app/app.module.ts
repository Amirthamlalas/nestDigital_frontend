import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SecurityGuardComponent } from './security-guard/security-guard.component';

const myconst:Routes=[
  {path:"",
component:AdminComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    SecurityGuardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myconst)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
