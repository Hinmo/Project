import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { TableComponent } from "../../components/table/table.component";
import { CounterComponent } from "../../components/counter/counter.component";

@Component({
    selector: 'app-persona',
    standalone: true,
    templateUrl: './persona.component.html',
    styleUrl: './persona.component.css',
    imports: [FormsModule, CommonModule, TableComponent, CounterComponent]
})
export class PersonaComponent implements OnInit {

  titulo: string= "Componente Persona";
  edad: number= 36;
  ocultar: boolean= true;
  tituloTabla: string= "Titulo Padre";

  users: { id: number; name: string }[] = [
    { id: 0, name: 'Lore' },
    { id: 1, name: 'Brayan' },
    { id: 2, name: 'Mario' },
    { id: 3, name: 'Giova' },
    { id: 4, name: 'Barbie' },
  ];

  mostrarModal(): void{
    Swal.fire({
      title: "The Internet?",
      text: `That thing is still around? ${this.titulo}`,
      icon: "question"
    });
  }

  ngOnInit(): void {
    
  }

  receptor: number=0;

  counterReceptor(numero:number){
    this.receptor=numero;
  }

  

}