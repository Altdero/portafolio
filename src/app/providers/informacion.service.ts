import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  public info: any = {};
  public infoCargada = false;
  public equipo: any[] = [];
  // public equipo: Array<any> = [];
  public sobreNosotrosCargada = false;

  constructor( public _httpClient: HttpClient ) {

    this.cargaInfo();
    this.cargaSobreNosotros();

  }

  public cargaInfo() {

    this._httpClient.get('assets/data/info.pagina.json').subscribe( ( data: any ) => {
      this.infoCargada = true;
      this.info = data;
    } );

  }

  public cargaSobreNosotros() {

    this._httpClient.get('https://portafolio-b2fcc.firebaseio.com/equipo.json').subscribe( ( data: any ) => {
      this.sobreNosotrosCargada = true;
      this.equipo = data;
    } );

  }

}
