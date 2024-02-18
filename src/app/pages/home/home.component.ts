import { Component } from '@angular/core';
import { PersonaComponent } from "../../shared/persona/persona.component";
import { QSomosComponent } from "../../shared/q-somos/q-somos.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PersonaComponent, QSomosComponent]
})
export class HomeComponent {

}
