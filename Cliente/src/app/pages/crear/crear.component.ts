import { Component } from '@angular/core';
import { ServicioBdService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  productoActualizar: any = { codigo: null, nombre: '', descripcion: '', precio: null };
  actualizacionExitosa: boolean = false;

  constructor(private productoService: ServicioBdService) { }

  ngOnInit(): void {
    // Puedes implementar aquí la lógica para cargar los datos del producto a actualizar
  }

  actualizarProducto(): void {
    this.productoService.actualizarProducto(this.productoActualizar).subscribe(
      response => {
        console.log('Producto actualizado', response);
        this.actualizacionExitosa = true;
      },
      error => {
        console.error('Error al actualizar el producto', error);
      }
    );
  }
}
