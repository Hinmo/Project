import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  getUsuarios(){
    return this.httpClient.get(`${base_url}/usuarioM`)
  }

  /* crearClientes(cliente: ClienteModel){
    return this.httpClient.post(`${base_url}/cliente`, cliente)
  } */

}