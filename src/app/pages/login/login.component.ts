import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: any;
  usuarioDB: string = 'usuarioibm';
  senhaDB: string = 'ibm12345';
  mensagem: string = '';

  constructor(public formBuilder: FormBuilder, public router: Router) {
    this.criarForm();
  }

  criarForm() {
    this.form = this.formBuilder.group({
      usuario: [''],

      senha: [''],
    });
  }

  login() {
    if (
      this.form.get('usuario').value == this.usuarioDB &&
      this.form.get('senha').value == this.senhaDB
    ) {
      this.router.navigate(['home']);
    } else {
      this.mensagem = 'E-mail e/ou senha estão inválidos!';
    }
  }
}
