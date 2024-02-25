import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../../core/interfaces/cliente';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() headerMapping: { [key: string]: string } = {};
  @Input() header: string[] = [];
  @Input() data: any[] = [];
  @Input() showAction: Boolean = false;
  @Output() editClientEvent = new EventEmitter<any>();

  //editar  
  editClient(client:Cliente):void{
    console.log("CLIENT",client)
    this.editClientEvent.emit(client)
  }

  //eliminar
  action2(deleteItem: any): void {    
    const confirmacion = confirm(`¿Estás seguro de que quieres eliminar el elemento?`);
      if (confirmacion) {
        const index = this.data.indexOf(deleteItem);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }
  }
}