import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VClientesComponent } from './pages/clientes/v-clientes/v-clientes.component';
import { AClientesComponent } from './pages/clientes/a-clientes/a-clientes.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

export const routes: Routes = [
    {
    path:'',
    title: 'Home',
    component: HomeComponent, 
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
    {
    path:'usuarios',
    title: 'Usuarios',
    component: UsuariosComponent, 
    }
];
