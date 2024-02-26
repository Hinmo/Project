import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalComponent } from "../../components/modal/modal.component";
import { LoginComponent } from "../../auth/login/login.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLink, ModalComponent, LoginComponent]
})
export class HeaderComponent {

  //modalReutilizable
  isModalOpen: boolean = false;
  openModal() {
    this.isModalOpen = true;
  }
  onModalClose() {
    this.isModalOpen = false;
  }

}