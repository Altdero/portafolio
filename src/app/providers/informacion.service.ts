import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  public info: any = {};
  public infoCargada = false;
  public equipo: any[] = [];
  // public equipo: Array<any> = [];
  public sobreNosotrosCargada = false;

  constructor( public http: Http ) {

    this.cargaInfo();
    this.cargaSobreNosotros();

  }

  public cargaInfo() {

    this.http.get('assets/data/info.pagina.json').subscribe( data => {
      this.infoCargada = true;
      this.info = data.json();
      console.log(this.info);
    } );

  }

  public cargaSobreNosotros() {

    this.http.get('https://portafolio-b2fcc.firebaseio.com/equipo.json').subscribe( data => {
      this.sobreNosotrosCargada = true;
      this.equipo = data.json();
      console.log(this.equipo);
    } );

  }

}
