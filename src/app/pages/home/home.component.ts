import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { MenuComponent } from "../../shared/menu/menu.component";
import { CarouselComponent } from "../../shared/carousel/carousel.component";
import { PersonaComponent } from "../../shared/persona/persona.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, MenuComponent, CarouselComponent, PersonaComponent, FooterComponent]
})
export class HomeComponent {

}
