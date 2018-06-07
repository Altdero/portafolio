import { Component } from '@angular/core';
import { ProductosService } from '../../providers/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent {

  constructor( private _prodService: ProductosService ) { }

}
