import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    styleUrl: './table.component.css',
    imports: [ModalComponent]
})
export class TableComponent implements OnInit{
  constructor(private modalService: ModalService) {}
  
  @Input() headerMapping: { [key: string]: string } = {};
  @Input() header: string[] = [];
  @Input() data: any[] = [];
  @Input() showAction: Boolean = false;
  @Output() editItem = new EventEmitter<any>();

  isModalOpen: boolean = false;
  

  //editar  
  editItemClicked(item: any): void {
    this.editItem.emit(item);
    this.isModalOpen = true;
  }

  //eliminar
  action2(deleteItem: any): void {    
    const confirmacion = confirm(`¿Estás seguro de que quieres eliminar el elemento seleccionado?`);
      if (confirmacion) {
        const index = this.data.indexOf(deleteItem);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }
  }

  //modalUniversal
  openModal() {
    this.isModalOpen = true;
  }
  onModalClose() {
    this.isModalOpen = false;
    this.editItem.emit(null);
  }

  ngOnInit(): void {
    this.modalService.formularioEnviado$.subscribe(() => {
      this.isModalOpen = false;
    });
    this.modalService.closeModal$.subscribe(() => {
      this.isModalOpen = false;
    });
  }
}