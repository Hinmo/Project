import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from '../../../core/interfaces/cliente';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-a-clientes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './a-clientes.component.html',
  styleUrl: './a-clientes.component.css'
})

export class AClientesComponent implements OnInit, OnChanges {
  @Input() cliente: Cliente | null = null;
  @Output() clienteCreado = new EventEmitter<Cliente>();

  clienteForm: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder, private modalService: ModalService) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cliente'] && changes['cliente'].currentValue) {
      this.inicializarFormulario();
    }
  }

  inicializarFormulario(): void {
    this.clienteForm = this.fb.group({
      id: [this.cliente?._id || '',],
      nombre: [this.cliente?.nombre || '', [Validators.required]],
      direccion: [this.cliente?.direccion || '', [Validators.required]],
      telefono: [this.cliente?.telefono || '', [Validators.required]],
      email: [this.cliente?.email || '', [Validators.required, Validators.email]],
      tDocumento: [this.cliente?.tDocumento || '', [Validators.required]],
      nDocumento: [this.cliente?.nDocumento || '', [Validators.required]],
      estado: [this.cliente?.estado ? 'activo' : 'inactivo',],
    });
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      const data = this.clienteForm.value;
      const nuevoCliente: Cliente = {
        _id: data.id || null,
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
      this.modalService.enviarEventoFormularioEnviado();
    }
  }

  onCancel(): void {
    this.clienteForm.reset();
    this.modalService.close();
    this.cliente = null;
  }
}