import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import { TableComponent } from '../../../components/table/table.component';
import { AClientesComponent } from '../a-clientes/a-clientes.component';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { Router } from '@angular/router';
import { ClienteModel } from '../../../core/models/cliente.model';
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

  misClientes: ClienteModel[] = [];
  clienteEnEdicion: Cliente | null = null;

  constructor(private clienteService: ClientesService, private router: Router, ) {}

 ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: any)=>{
      this.misClientes = data.clientes;
    });
    this.misClientes = this.transformarClientes(this.misClientes);
  }

  //transformar el estado de boolean a Activo-Inactivo
  transformarClientes(clientes: ClienteModel[]): any[] {
    return clientes.map(cliente => {
      return {
        ...cliente,
        estado: cliente.estado ? 'Activo' : 'Inactivo'
      };
    });
  }

   editarCliente(cliente: Cliente): void {
    this.clienteEnEdicion = cliente;
  }

  agregarCliente(cliente: ClienteModel) {
    const data: ClienteModel = cliente;  
      if (this.clienteEnEdicion) {                      
      const index = this.misClientes.findIndex(
        (cliente) => cliente._id === this.clienteEnEdicion?._id         //aqui comprueba si el modal esta en edicion
      );
      if (index !== -1) {
        this.misClientes[index] = cliente;
        this.clienteEnEdicion = null;
      }
    } else {
      this.clienteService.crearClientes(data).subscribe({
        next: (resp: any) => {
          console.log("usuario creado", resp);
        },
        error: (error: any) =>{
          console.log("error al crear", error);
        }
      });    //proceso normal de creacion
    }
    
    console.log("estoy aqui", data);
  }
}

// this.router.navigateByUrl(`add-clientes#path`)