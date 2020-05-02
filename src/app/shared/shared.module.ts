import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ]
})

export class SharedModule {
}
