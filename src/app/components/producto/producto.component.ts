import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../providers/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  codigo: string;
  producto: any = {};

  constructor(
    private _prodService: ProductosService,
    private _actRoute: ActivatedRoute
  ) {

    _actRoute.params.subscribe( ( params: any ) => {
      this.codigo = params.id;
      _prodService.cargarProducto( params.id ).subscribe( ( dataProd: any ) => {
        this.producto = dataProd;
      } ) ;
    } );

  }

}
