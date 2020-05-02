import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginGuardGuard } from '../services/service.index';

const pagesRoutes: Routes = [
  {
      path: '',
      component: PagesComponent,
      canActivate: [ LoginGuardGuard ],
      children : [
          { path: 'home', component: HomeComponent, data: {titulo: 'Dashboard'} },
          { path: '', redirectTo: '/home', pathMatch: 'full' },
        ]
  }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
