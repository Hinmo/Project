import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() headerMapping: { [key: string]: string } = {};
  @Input() header: string[] | undefined;
  @Input() data: any[] = [];
}
