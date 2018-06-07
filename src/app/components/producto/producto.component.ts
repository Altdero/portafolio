import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  constructor( private _actRoute: ActivatedRoute ) {
    _actRoute.params.subscribe( ( params: any ) => {
      console.log(params.id);
    } );
  }

}
