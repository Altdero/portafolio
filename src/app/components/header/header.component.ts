import { InformacionService } from './../../providers/informacion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {

  constructor( public service: InformacionService ) { }

}
