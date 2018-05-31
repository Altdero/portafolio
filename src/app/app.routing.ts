import { RouterModule, Routes } from '@angular/router';

import {
  PortafolioComponent,
  ItemComponent,
  AboutComponent
} from './components/index.paginas';

const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'item', component: ItemComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
