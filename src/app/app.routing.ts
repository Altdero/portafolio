import { RouterModule, Routes } from '@angular/router';

import {
  PortafolioComponent,
  ProductoComponent,
  AboutComponent
} from './components/index.paginas';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const appRouting = RouterModule.forRoot(routes, { useHash: true });
