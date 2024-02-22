
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    //mi modal
    isModalOpen = false;
      
    aModal() {
      this.isModalOpen = true;
    }
  
    cModal() {
      this.isModalOpen = false;
        }  
    //fin modal funciones

}
