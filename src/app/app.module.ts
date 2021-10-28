import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { BackPageComponent } from './components/back-page/back-page.component';
import { BeneficiosComponent } from './views/beneficios/beneficios.component';
import { FormularioComponent } from './views/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    BackPageComponent,
    BeneficiosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
