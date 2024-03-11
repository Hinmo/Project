import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  clienteEnEdicion: ClienteModel | null = null;

  constructor(private clienteService: ClientesService, private router: Router, ) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clienteService.getClientes().subscribe((data: any) => {
      this.misClientes = this.transformarClientes(data.clientes);
    });
  }

  //transformar el estado de boolean a Activo-Inactivo y ordenar
  transformarClientes(clientes: ClienteModel[]): any[] {
    return clientes.map(cliente => ({ ...cliente, estado: cliente.estado ? 'Activo' : 'Inactivo' }))
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  editarCliente(cliente: ClienteModel): void {
    this.clienteEnEdicion = cliente;
  }

  agregarCliente(cliente: ClienteModel) {
    if (this.clienteEnEdicion) {                      
      // Si hay un cliente en edición, entonces estamos editando, no creando uno nuevo
      const clienteId = this.clienteEnEdicion._id; // Acceder a la propiedad _id solo si clienteEnEdicion no es undefined
      if (clienteId) {
        this.clienteService.editarCliente(clienteId, cliente).subscribe({
          next: (resp: any) => {
            console.log("Cliente editado", resp);
            // Actualizar la lista de clientes después de recibir la confirmación del servidor
            this.obtenerClientes();
            // Reiniciar la variable de cliente en edición
            this.clienteEnEdicion = null;
          },
          error: (error: any) =>{
            console.log("Error al editar", error);
          }
        });
      } else {
        console.log("El cliente en edición no tiene un ID definido. No se puede editar.");
      }
    } else {
      // Si no hay cliente en edición, entonces estamos creando un nuevo cliente
      this.clienteService.crearClientes(cliente).subscribe({
        next: (resp: any) => {
          console.log("Cliente creado", resp);
          // Actualizar la lista de clientes después de recibir la confirmación del servidor
          this.obtenerClientes();
        },
        error: (error: any) =>{
          console.log("Error al crear", error);
        }
      });
    }
  }  
}