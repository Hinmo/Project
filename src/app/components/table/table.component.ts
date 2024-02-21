import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  /* @Output() deleteClientEvent = new EventEmitter<number>(); */

  //eliminar
  action2(idItem: number): void {
    
    const confirmacion = confirm('¿Estás seguro de que quieres eliminar este elemento?');
    if (confirmacion) {
    this.data = this.data.filter(
        (data) => data.id !== idItem
      );
    }

   /* const newData = [...this.data];
    this.data = newData.filter((data) => data.id !== idItem); */

    /* this.deleteClientEvent.emit(idItem); */
  }
}

/* action2(idItem: number): void {
  const index = this.data.findIndex(data => data.id === idItem);
  if (index !== -1) {
      this.data = [
          ...this.data.slice(0, index),
          ...this.data.slice(index + 1)
      ];
  }
} */