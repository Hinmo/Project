import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';

@Component({
  selector: 'app-v-clientes',
  standalone: true,
  imports: [],
  templateUrl: './v-clientes.component.html',
  styleUrl: './v-clientes.component.css'
})
export class VClientesComponent implements OnInit {
  
  misClientes: Cliente[] = [];

  ngOnInit(): void {
    this.misClientes.push({
      id:1,
      nombre: "Mario",
      direccion: "cra 63 9-07 sur",
      telefono: "+57 3213765831",
      email: "jorjuroba@gmail.com",
      tDocumento: "CedulaCiudadania",
      nDocumento:"1130609314",
      estado:true,
    },
    {
      id:1,
      nombre: "Brayan",
      direccion: "cra 13a 13a-07",
      telefono: "+57 3052083",
      email: "brayan@gmail.com",
      tDocumento: "CedulaCiudadania",
      nDocumento:"1130558998",
      estado:true,
    },
    {
      id:1,
      nombre: "Giova",
      direccion: "cra 13a 13a-07",
      telefono: "+57 3052083",
      email: "giova@gmail.com",
      tDocumento: "CedulaCiudadania",
      nDocumento:"1130584211",
      estado:true,
    }
    );

    this.misClientes.forEach((cliente) => {
      console.log("mis clientes", cliente);
    });

  }

}
