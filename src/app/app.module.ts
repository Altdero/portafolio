import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';

// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { appRouting } from './app.routing';

import { InformacionService } from './providers/informacion.service';
import { ProductosService } from './providers/productos.service';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    // HttpModule
    HttpClientModule
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
