import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import { TableComponent } from '../../../components/table/table.component';
import { AClientesComponent } from '../a-clientes/a-clientes.component';
import { ClientesService } from '../../../services/clientes/clientes.service';
//
@Component({
  selector: 'app-v-clientes',
  standalone: true,
  templateUrl: './v-clientes.component.html',
  styleUrl: './v-clientes.component.css',
  imports: [TableComponent, AClientesComponent],
})
export class VClientesComponent implements OnInit {
  @Output() editarClienteEvent = new EventEmitter<Cliente>();

  headNames: string[] = [
    'nombre',
    'direccion',
    'telefono',
    'email',
    'tDocumento',
    'nDocumento',
    'estado',
  ];

  headMap: { [key: string]: string } = {
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

  constructor(private clienteService: ClientesService) {}

 ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: any)=>{
      this.misClientes = data.clientes;
    });
  }

   editarCliente(cliente: Cliente): void {
    this.clienteEnEdicion = cliente;
  }

  agregarCliente(cliente: Cliente) {   
    if (this.clienteEnEdicion) {                      
      const index = this.misClientes.findIndex(
        (cliente) => cliente._id === this.clienteEnEdicion?._id         //aqui comprueba si el modal esta en edicion
      );
      if (index !== -1) {
        this.misClientes[index] = cliente;                          //aqui llenas con la info el modal y le reasignas el valor nuevo de haber cambios
        this.clienteEnEdicion = null;
      }
    } else {
      this.misClientes = [...this.misClientes, cliente];    //proceso normal de creacion
    }
    //this.cModal();
  }
}