import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './modules/shared/home/home.component';
import {PageNotFoundComponent} from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'ayuda', loadChildren: () => import('./modules/ayuda/ayuda.module').then((m) => m.AyudaModule)
  },
  {
    path: 'catalogo', loadChildren: () => import('./modules/catalogo/catalogo.module').then((m) => m.CatalogoModule)
  },
  {
    path: 'contacto', loadChildren: () => import('./modules/contacto/contacto.module').then((m) => m.ContactoModule)
  },
  {
    path: 'nosotros', loadChildren: () => import('./modules/nosotros/nosotros.module').then((m) => m.NosotrosModule)
  },
  {
    path: 'servicios', loadChildren: () => import('./modules/servicios/servicios.module').then((m) => m.ServiciosModule)
  },
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
  {path: 'page-not-found', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {
}
