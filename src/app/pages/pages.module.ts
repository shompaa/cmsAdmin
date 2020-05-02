import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    PAGES_ROUTES
  ]
})
export class PagesModule { }
