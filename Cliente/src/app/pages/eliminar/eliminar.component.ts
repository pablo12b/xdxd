import { Component } from '@angular/core';
import { ServicioBdService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  idaBorrar : any
  constructor(private bdservice : ServicioBdService) { }

  borrarProducto(): void {
    if (this.idaBorrar !== null) {
      this.bdservice.deleteProducto(this.idaBorrar).subscribe(
        response => {
          console.log('Producto borrado', response);
          this.idaBorrar = null; // Resetear el campo de entrada
        },
        error => {
          console.error('Error al borrar el producto', error);
        }
      );
    }
  }

}
