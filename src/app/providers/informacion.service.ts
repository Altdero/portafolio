import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: any = {};
  cargando = false;

  constructor( public http: Http ) {

    http.get('assets/data/info.pagina.json').subscribe( data => {
      this.info = data.json();
      this.cargando = true;
    } );

  }
}
