import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/Operators';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  logueado = false;

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  async login( usuario: Usuario, recordar: boolean ) {
    try {
      if (recordar) {
        localStorage.setItem('email', usuario.email);
      } else {
        localStorage.removeItem('email');
      }
      const result = await this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.password);
      if (result != null) {
        this.logueado = true;
      }
      this.router.navigate(['/home']);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.logueado = false;
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }

  isLogged() {
    return this.logueado;
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async getCurrentUserData() {
    const respUser = await this.getCurrentUser();
    return this.http

  }

}
