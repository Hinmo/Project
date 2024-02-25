import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
