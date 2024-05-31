import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../enviroment/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioBdService {

  constructor(private http : HttpClient) { }

  getProductos() {
    return this.http.get(`http://localhost:8080/demo63/rest/productos/list`);
  }

  deleteProducto(id: number) {
    return this.http.delete(`http://localhost:8080/demo63/rest/productos?codigo=`+ id);
  }

  actualizarProducto(producto: Producto) {
    return this.http.put(`http://localhost:8080/demo63/rest/productos`, producto);
  }
    
}
