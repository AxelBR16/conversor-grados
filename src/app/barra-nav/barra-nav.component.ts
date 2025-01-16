import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra-nav',
  imports: [RouterModule, CommonModule],
  templateUrl: './barra-nav.component.html',
  styleUrl: './barra-nav.component.css'
})
export class BarraNavComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
}
