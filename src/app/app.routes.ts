import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { QsomosComponent } from './pages/qsomos/qsomos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
    path:'',
    title: 'Home',
    component: HomeComponent, 
    },
    {
    path:'acerca',
    title: 'Acerca',
    component: AcercaComponent, 
    },
    {
    path:'qsomos',
    title: 'QuienesSomos',
    component: QsomosComponent, 
    },
    {
    path:'contacto',
    title: 'Contacto',
    component: ContactoComponent, 
    },

];
