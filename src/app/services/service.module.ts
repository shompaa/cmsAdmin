import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginGuardGuard, AuthService, SidebarService, FirebaseService } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SidebarService,
    AuthService,
    LoginGuardGuard,
    FirebaseService
  ]
})
export class ServiceModule { }
