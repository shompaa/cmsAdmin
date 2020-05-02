import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  constructor(private _authService: AuthService) { }
  ngOnInit(): void {
    init_plugins();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  onLogin( form: NgForm) {
    if (form.invalid) {
      return;
    }
    const usuario: Usuario = new Usuario(form.value.email, form.value.password);
    this._authService.login(usuario, form.value.recuerdame);
    
  }

}
