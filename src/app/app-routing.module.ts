import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PaginaFoodStoreComponent } from './pagina-food-store/pagina-food-store.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [

  {path:'',component: PaginaInicioComponent},
  {path:'carta', component: PaginaFoodStoreComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'configuracion', component: ConfiguracionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
