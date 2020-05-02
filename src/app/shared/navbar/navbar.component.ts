import { Component, OnInit } from '@angular/core';
import { AuthService, FirebaseService } from 'src/app/services/service.index';
import { Usuario } from '../../models/usuario.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  currentUser: Usuario;

  constructor(private _authService: AuthService, private _firebaseService: FirebaseService) { }

  async ngOnInit() {
    const respUser = await this._authService.getCurrentUser();
    console.log(respUser);

    console.log('======================================');
    this._firebaseService.getUsers().subscribe((resp) => {
      console.log('RESPUESTA', resp);
    });
  }

  getUsers() {
  }

  logout() {
    this._authService.logout();
  }

}