import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];
  cargandoProductos: boolean;

  constructor( private _httpClient: HttpClient ) {
    this.cargarProductos();
  }

  public cargarProductos() {

    this.cargandoProductos = true;

    this._httpClient.get('https://portafolio-b2fcc.firebaseio.com/productos_idx.json').subscribe( ( data: any ) => {
      this.productos = data;
      this.cargandoProductos = false;
    } );

  }

  public cargarProducto( cod: string ) {

    return this._httpClient.get(`https://portafolio-b2fcc.firebaseio.com/productos/${ cod }.json`);

  }

}
