import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  { path: '', redirectTo: 'paginas/listar', pathMatch: 'full' }, // Redirige la ruta raíz a la página de registro
  {path:"paginas/crear", component: CrearComponent},
  {path:"paginas/actualizar", component: ActualizarComponent},
  {path:"paginas/eliminar", component: EliminarComponent},
  {path:"paginas/listar", component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
