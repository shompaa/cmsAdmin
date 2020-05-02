import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './error/notfound/notfound.component';

import { APP_ROUTES } from './app.routes';

import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule  } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ServiceModule,
    PagesModule,
    SharedModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
