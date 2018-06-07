import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../providers/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino = '';

  constructor(
    public _prodService: ProductosService,
    private _actRoute: ActivatedRoute
  ) {

    _actRoute.params.subscribe( ( params: any) => {
      this.termino = params.termino;
      _prodService.buscarProducto( this.termino );
    } );
  }

}
