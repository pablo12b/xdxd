import { Component, OnInit } from '@angular/core';
import { ServicioBdService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  productos: any[] = []; // Arreglo para almacenar los datos de los clientes

  constructor(private bdServicio:ServicioBdService ) { }

  ngOnInit(): void {
    this.obtenerProductos(); // Llama al método obtenerClientes() cuando el componente se inicie
  }

  obtenerProductos() {
    this.bdServicio.getProductos().subscribe(
      (data: any) => {
        // Verifica si data es un arreglo o un objeto
        if (Array.isArray(data)) {
          // Si es un arreglo, asigna directamente
          this.productos = data;
        } else {
          // Si es un objeto, intenta convertirlo a un arreglo
          this.productos = [data];
        }
      },
      (error) => {
        console.log('Error al obtener los datos de los clientes:', error);
        alert('Hubo un error al obtener los datos de los clientes.');
      }
    );
  }
}
