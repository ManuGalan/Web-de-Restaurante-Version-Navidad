import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PaginaFoodStoreComponent } from './pagina-food-store/pagina-food-store.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    PaginaFoodStoreComponent,
    LoginComponent,
    RegisterComponent,
    ConfiguracionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
