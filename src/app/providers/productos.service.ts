import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];
  productosFiltrdos: any[] = [];
  cargandoProductos: boolean;

  constructor( private _httpClient: HttpClient ) {
    this.cargarProductos();
  }

  public cargarProductos() {

    this.cargandoProductos = true;

    const PROMESA = new Promise( ( resolve, reject )  => {
      this._httpClient.get('https://portafolio-b2fcc.firebaseio.com/productos_idx.json').subscribe( ( data: any ) => {
        this.productos = data;
        this.cargandoProductos = false;
        resolve();
      } );
    } );

    return PROMESA;

  }

  public cargarProducto( cod: string ) {

    return this._httpClient.get(`https://portafolio-b2fcc.firebaseio.com/productos/${ cod }.json`);

  }

  public buscarProducto( termino: string ) {

    if ( this.productos.length === 0 ) {
      this.cargarProductos().then( () => {
        this.filtrarProductos( termino );
      } );
    } else {
      this.filtrarProductos( termino );
    }

  }

  private filtrarProductos( termino: string ) {

    this.productosFiltrdos = [];

    this.productos.forEach( ( productos: any ) => {
      if ( productos.categoria.toLowerCase().indexOf( termino ) >= 0 || productos.titulo.toLowerCase().indexOf( termino ) >= 0 ) {
        this.productosFiltrdos.push( productos );
      }

    } );

  }

}
