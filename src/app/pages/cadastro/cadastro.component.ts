import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/usuario';
<<<<<<< HEAD
import{FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
=======
import{FormGroup, FormControl} from '@angular/forms';
import * as firebase from 'firebase';
>>>>>>> bf49d518d89524985f9f0f990ae48145d1507ff4

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})



export class CadastroComponent implements OnInit {
  formUser: FormGroup;

<<<<<<< HEAD
  constructor(private formBuilder: FormBuilder) {}

  //Iniciando o Metodo CreaeForm
=======
  constructor() { }
  
//Iniciando o Metodo CreaeForm
>>>>>>> bf49d518d89524985f9f0f990ae48145d1507ff4
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
<<<<<<< HEAD
=======
//Metodo
creatForm(users: User){
this.formUser = new FormGroup({
  email: new FormControl(users.email),
  confemail: new FormControl(users.confemail),
  senha: new FormControl(users.senha),
  dataNasc: new FormControl(users.dataNasc),
  sexo: new FormControl(users.sexo),
 
});
}
onSubmit(){
  console.log(this.formUser.value);
alert("Cadastrado com sucesso");
this.formUser.reset(new User());
  }
>>>>>>> bf49d518d89524985f9f0f990ae48145d1507ff4
}

