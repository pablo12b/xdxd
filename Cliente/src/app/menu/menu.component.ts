import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  paginas = [
    {titulo: 'Agregar', path: 'paginas/crear'},
    {titulo: 'Actualizar', path: 'paginas/actualizar'},
    {titulo: 'Eliminar', path: 'paginas/eliminar'},
    {titulo: 'Listar', path: 'paginas/listar'},
  ]
}
