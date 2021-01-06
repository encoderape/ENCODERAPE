import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/shared/home/home.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    data: { title: 'Ayuda' },
    path: 'ayuda',
    loadChildren: () =>
      import('./modules/ayuda/ayuda.module').then((m) => m.AyudaModule),
  },
  {
    data: { title: 'Nuestros Clientes' },
    path: 'catalogo',
    loadChildren: () =>
      import('./modules/catalogo/catalogo.module').then(
        (m) => m.CatalogoModule
      ),
  },
  {
    data: { title: 'Contacto' },
    path: 'contacto',
    loadChildren: () =>
      import('./modules/contacto/contacto.module').then(
        (m) => m.ContactoModule
      ),
  },
  {
    data: { title: 'Nosotros' },
    path: 'nosotros',
    loadChildren: () =>
      import('./modules/nosotros/nosotros.module').then(
        (m) => m.NosotrosModule
      ),
  },
  {
    data: { title: 'Servicios' },
    path: 'servicios',
    loadChildren: () =>
      import('./modules/servicios/servicios.module').then(
        (m) => m.ServiciosModule
      ),
  },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
