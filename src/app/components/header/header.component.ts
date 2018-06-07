import { InformacionService } from './../../providers/informacion.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {

  constructor(
    public _infoService: InformacionService,
    private _router: Router
  ) { }

  buscarProducto( termino: string ) {

    this._router.navigate( [ 'search', termino ] );

  }

}
