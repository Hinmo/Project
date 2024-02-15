import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Output() counter: EventEmitter<number> = new EventEmitter<number>();

  contador: number = 0;

  increment(){
    this.contador++;
    this.counter.emit(this.contador)
  }
}
