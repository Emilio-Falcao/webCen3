import { Injectable } from '@angular/core';
import { off } from 'process';
import { Observable } from 'rxjs';
//import { USUARIOS } from './mock-usuario';
import { User } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

 getUsers():Observable<User[]>{
   return;
 }
}
