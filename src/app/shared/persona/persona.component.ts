import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit {

  titulo: string= "Componente Persona";
  edad: number= 36;
  ocultar: boolean= true;

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
    throw new Error('Method not implemented.');
  }

}
