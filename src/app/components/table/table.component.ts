import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  input,
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  imports: [ModalComponent, FormsModule],
})
export class TableComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  @Input() headerMapping: { [key: string]: string } = {};
  @Input() header: string[] = [];
  @Input() data: any[] = [];
  @Input() showAction: Boolean = false;
  @Input() agregarItem: Boolean = false;
  @Input() isModalOpen: boolean = false;
  @Output() editItem = new EventEmitter<any>();

  searchTerm: string = '';
  filteredData: any[] = [];

  //editar
  editItemClicked(item: any): void {
    this.editItem.emit(item);
    this.openModal();
  }

  //eliminar
  action2(deleteItem: any): void {
    const confirmacion = confirm(
      `¿Estás seguro de que quieres eliminar el elemento seleccionado?`
    );
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
  }

  ngOnInit(): void {
    this.modalService.formularioEnviado$.subscribe(() => {
      this.isModalOpen = false;
    });
    this.modalService.closeModal$.subscribe(() => {
      this.isModalOpen = false;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['searchTerm']) {
      this.filterData();
    }
  }

  //Filtro-Verificamos si el campo de busqueda esta vacio
  filterData(): void {
    if (!this.searchTerm.trim()) {
      this.filteredData = [...this.data];
      return;
    }

    //Convertimos el termino a buscar en minusculas para luego hacer el filtro.
    const searchTermLower = this.searchTerm.trim().toLowerCase();
    this.filteredData = this.data.filter((item) => {
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          const value = item[key];
          if (
            typeof value === 'string' &&
            value.toLowerCase().includes(searchTermLower)
          ) {
            return true;
          }
        }
      }
      return false;
    });
  }
}