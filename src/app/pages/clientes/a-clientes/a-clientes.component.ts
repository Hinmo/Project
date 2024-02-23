import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from '../../../core/interfaces/cliente';

@Component({
  selector: 'app-a-clientes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './a-clientes.component.html',
  styleUrl: './a-clientes.component.css'
})
export class AClientesComponent implements OnInit {
  @Input() cliente: Cliente|null = {} as Cliente;
  @Output() clienteCreado = new EventEmitter<Cliente>();

  clienteForm: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder) {}
//AQUI LO QUE HICE ES decirle al form que sirva para editar y crear , es decir que ya puede venir informacion o no   aaamigooo, esta es la magia por la q yo preguntaba
 
//A ESTE TIPO DE COSAS ME REFIERO CUANDO TE DIGO QUE PROGRAMES UNIVERSAL
// SI HUBISEMOS TENIDO UN FORM DINAMICO Y UN MODAL DINAMICO IMAGINA LAS POSIBILIDADES

//PERO BUENO CON ETO YA PUEDE SEGUIR      pues tengo trabajo, 


ngOnInit(): void {
    this.clienteForm = this.fb.group({
      id: [this.cliente?.id || '', [Validators.required]],
      nombre: [this.cliente?.nombre || '', [Validators.required]],
      direccion: [this.cliente?.direccion || '', [Validators.required]],
      telefono: [this.cliente?.telefono || '', [Validators.required]],
      email: [this.cliente?.email || '',[Validators.required, Validators.email]],
      tDocumento: [this.cliente?.tDocumento || '', [Validators.required]],
      nDocumento: [this.cliente?.nDocumento || '', [Validators.required]],
      estado: [this.cliente?.estado ? 'activo' : 'inactivo', [Validators.required],
      ],
    });
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      const data = this.clienteForm.value;
      const nuevoCliente: Cliente = {
        id: Number(data.id),
        nombre: data.nombre || '',
        direccion: data.direccion || '',
        telefono: data.telefono || '',
        email: data.email || '',
        tDocumento: data.tDocumento || '',
        nDocumento: data.nDocumento || '',
        estado: data.estado === 'activo',
      };
      this.clienteCreado.emit(nuevoCliente);
      this.clienteForm.reset();
    }
  }
}
