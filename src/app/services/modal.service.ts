import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private formularioEnviadoSource = new Subject<void>();
  formularioEnviado$ = this.formularioEnviadoSource.asObservable();

  private closeModalSource = new Subject<void>();
  closeModal$ = this.closeModalSource.asObservable();

  constructor() {}

  enviarEventoFormularioEnviado(): void {
    this.formularioEnviadoSource.next();
  }

  close(): void {
    this.closeModalSource.next();
  }
}