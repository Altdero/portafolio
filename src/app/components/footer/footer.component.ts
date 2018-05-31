import { InformacionService } from './../../providers/informacion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  anio = new Date().getFullYear();

  constructor( public service: InformacionService) { }

}
