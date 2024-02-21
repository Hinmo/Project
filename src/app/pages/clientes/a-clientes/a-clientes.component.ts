import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from '../../../core/interfaces/cliente';

@Component({
  selector: 'app-a-clientes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './a-clientes.component.html',
  styleUrl: './a-clientes.component.css'
})
export class AClientesComponent {

   
  @Output() clienteCreado = new EventEmitter<Cliente>();
  clientForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tDocumento: new FormControl('', [Validators.required]),
    nDocumento: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.clientForm.valid) {
      const data = this.clientForm.value;
      const nuevoCliente: Cliente = {
        id: Number(data.id),
        nombre: data.nombre || "",
        direccion: data.direccion || "",
        telefono: data.telefono || "",
        email: data.email || "",
        tDocumento: data.tDocumento || "",
        nDocumento: data.nDocumento || "",
        estado: data.estado === 'activo'
      };
      this.clienteCreado.emit(nuevoCliente);
      this.clientForm.reset();
    }
  }
}