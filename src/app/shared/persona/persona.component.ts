import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { TableComponent } from "../../components/table/table.component";
import { CounterComponent } from "../../components/counter/counter.component";
import { User } from '../../core/interfaces/user';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
    selector: 'app-persona',
    standalone: true,
    templateUrl: './persona.component.html',
    styleUrl: './persona.component.css',
    imports: [FormsModule, CommonModule, TableComponent, CounterComponent, ModalComponent]
})
export class PersonaComponent implements OnInit {

  titulo: string= "Componente Persona";
  edad: number= 36;

  users: User[] = [
    { identificacion: 0, name: 'Lore' },
    { identificacion: 1, name: 'Brayan' },
    { identificacion: 2, name: 'Mario' },
    { identificacion: 3, name: 'Giova' },
    { identificacion: 4, name: 'Barbie' },
  ];

  ngOnInit(): void {
    
  }

  receptor: number=0;

  counterReceptor(numero:number){
    this.receptor=numero;
  }

  //modalReutilizable
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  onModalClose() {
    this.isModalOpen = false;
  }
  

}