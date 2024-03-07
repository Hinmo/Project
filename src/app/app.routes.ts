import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { QsomosComponent } from './pages/qsomos/qsomos.component';
import { VClientesComponent } from './pages/clientes/v-clientes/v-clientes.component';
import { AClientesComponent } from './pages/clientes/a-clientes/a-clientes.component';
import { RegisterComponent } from './auth/register/register.component';

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
    path:'registro',
    title: 'Registro',
    component: RegisterComponent, 
    },
    {
    path:'clientes',
    title: 'vClientes',
    component: VClientesComponent, 
    },
    {
    path:'nuevoCliente',
    title: 'Agregar_Cliente',
    component: AClientesComponent, 
    },

];
