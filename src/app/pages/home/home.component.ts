import { Component } from '@angular/core';
import { CarouselComponent } from "../../shared/carousel/carousel.component";
import { PersonaComponent } from "../../shared/persona/persona.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarouselComponent, PersonaComponent]
})
export class HomeComponent {

}
