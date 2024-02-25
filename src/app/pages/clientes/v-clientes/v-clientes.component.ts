import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import { TableComponent } from '../../../components/table/table.component';
import { AClientesComponent } from '../a-clientes/a-clientes.component';
//
@Component({
  selector: 'app-v-clientes',
  standalone: true,
  templateUrl: './v-clientes.component.html',
  styleUrl: './v-clientes.component.css',
  imports: [TableComponent, AClientesComponent],
})
export class VClientesComponent implements OnInit {
  headNames: string[] = [
    'id',
    'nombre',
    'direccion',
    'telefono',
    'email',
    'tDocumento',
    'nDocumento',
    'estado',
  ];

  headMap: { [key: string]: string } = {
    id: 'ID',
    nombre: 'Nombre',
    direccion: 'Dirección',
    telefono: 'Teléfono',
    email: 'Correo Electrónico',
    tDocumento: 'Tipo de Documento',
    nDocumento: 'Número de Documento',
    estado: 'Estado',
  };

  misClientes: Cliente[] = [];
  clienteEnEdicion: Cliente | null = null;

  ngOnInit(): void {
    this.misClientes.push(
      {
        id: 1,
        nombre: 'Mario',
        direccion: 'cra 63 9-07 sur',
        telefono: '+57 3213765831',
        email: 'jorjuroba@gmail.com',
        tDocumento: 'Cc',
        nDocumento: '1130609314',
        estado: false,
      },
      {
        id: 2,
        nombre: 'Brayan',
        direccion: 'cra 13a 13a-07',
        telefono: '+57 3052083',
        email: 'brayan@gmail.com',
        tDocumento: 'Cc',
        nDocumento: '1130558998',
        estado: true,
      },
      {
        id: 3,
        nombre: 'Giova',
        direccion: 'cra 13a 13a-07',
        telefono: '+57 3052083',
        email: 'giova@gmail.com',
        tDocumento: 'Cc',
        nDocumento: '1130584211',
        estado: true,
      }
    );
  }

  //mi modal
  isModalOpen = false;

  aModal() {
    this.isModalOpen = true;
  }

  cModal() {
    this.isModalOpen = false;
    this.clienteEnEdicion = null;
  }
  //fin modal funciones

  editarCliente(cliente: Cliente): void {
    this.clienteEnEdicion = cliente;
    this.isModalOpen = true;
  }

  // revisar
  agregarCliente(cliente: Cliente) {   
    if (this.clienteEnEdicion) {                      
      const index = this.misClientes.findIndex(
        (cliente) => cliente.id === this.clienteEnEdicion?.id         //aqui comprueba si el modal esta en edicion
      );
      if (index !== -1) {
        this.misClientes[index] = cliente;                          //aqui llenas con la info el modal y le reasignas el valor nuevo de haber cambios
        this.clienteEnEdicion = null;
      }
    } else {
      this.misClientes = [...this.misClientes, cliente];    //proceso normal de creacion
    }
    this.cModal();
  }
}