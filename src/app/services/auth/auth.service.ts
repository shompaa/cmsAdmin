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

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  async login( usuario: Usuario, recordar: boolean ) {
    try {
      if (recordar) {
        localStorage.setItem('email', usuario.email);
      } else {
        localStorage.removeItem('email');
      }
      const result = await this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.password);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/home']);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }

  isLogged() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async getCurrentUserData() {
    const respUser = await this.getCurrentUser();
  }

}
