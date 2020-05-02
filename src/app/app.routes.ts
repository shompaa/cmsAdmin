import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { NotfoundComponent } from './error/notfound/notfound.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '**', component: NotfoundComponent}
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
