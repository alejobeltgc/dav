import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiosComponent } from './views/beneficios/beneficios.component';
import { FormularioComponent } from './views/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficiosComponent,
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: '**',
    redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
