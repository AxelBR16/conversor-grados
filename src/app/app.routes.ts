import { Routes } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'conversion/:tipo', component: ConversorComponent},
];
