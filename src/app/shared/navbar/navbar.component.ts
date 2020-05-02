import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/service.index';
import { Usuario } from '../../models/usuario.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  currentUser: Usuario;

  constructor(private _authService: AuthService, private db: AngularFirestore) { }

  async ngOnInit() {
    const respUser = await this._authService.getCurrentUser();
    console.log(respUser);
  }

  logout() {
    this._authService.logout();
  }

}
