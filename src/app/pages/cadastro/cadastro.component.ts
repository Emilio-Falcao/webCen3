import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/usuario';
import{FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  formUser: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  //Iniciando o Metodo CreaeForm
  ngOnInit(): void {
    this.creatForm(new User());
  }
  //Metodo
  creatForm(users: User) {
    this.formUser = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      email: [users.email],
      confemail: [users.confemail],
      senha: [users.senha],
      data: [users.dataNasc],
      sexo: [users.sexo],
    });
  }
  onSubmit() {
    console.log(this.formUser.value);
    alert('Cadastrado com sucesso');
    this.formUser.reset(new User());
  }
  get userNome(): any {
    return this.formUser.get('nome');
  }
}

