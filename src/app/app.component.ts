import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { ConversorComponent } from './conversor/conversor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corregido de 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'conversor-grados';
}
