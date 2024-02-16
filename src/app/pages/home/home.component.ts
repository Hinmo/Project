import { Component } from '@angular/core';
import { PersonaComponent } from "../../shared/persona/persona.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PersonaComponent]
})
export class HomeComponent {

}
