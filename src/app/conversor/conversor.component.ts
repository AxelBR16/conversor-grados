import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-conversor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit, OnDestroy {
  form: FormGroup;
  tipo: string = '';
  valor: string = 'Celsius';
  resultado: string = 'Fahrenheit';
  private routeSub: Subscription = new Subscription();

  constructor(private aRouter: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      entrada: ['', Validators.required],
      salida: ['',]
    });
  }

  ngOnInit(): void {
    this.routeSub = this.aRouter.paramMap.subscribe(params => {
      this.tipo = params.get('tipo')!;
      this.operacion();
    });
  }

  operacion() {
    const entrada = this.form.get('entrada')?.value;

    switch (this.tipo) {
      case 'cf':  // Celsius a Fahrenheit
        this.valor = 'Celsius';
        this.resultado = 'Fahrenheit';
        this.form.get('salida')?.setValue(this.celsiusAFahrenheit(entrada));
        break;
      case 'ck':  // Celsius a Kelvin
        this.valor = 'Celsius';
        this.resultado = 'Kelvin';
        this.form.get('salida')?.setValue(this.celsiusAKelvin(entrada));
        break;
      case 'fc':  // Fahrenheit a Celsius
        this.valor = 'Fahrenheit';
        this.resultado = 'Celsius';
        this.form.get('salida')?.setValue(this.fahrenheitACelsius(entrada));
        break;
      case 'fk':  // Fahrenheit a Kelvin
        this.valor = 'Fahrenheit';
        this.resultado = 'Kelvin';
        this.form.get('salida')?.setValue(this.fahrenheitAKelvin(entrada));
        break;
      case 'kc':  // Kelvin a Celsius
        this.valor = 'Kelvin';
        this.resultado = 'Celsius';
        this.form.get('salida')?.setValue(this.kelvinACelsius(entrada));
        break;
      case 'kf':  // Kelvin a Fahrenheit
        this.valor = 'Kelvin';
        this.resultado = 'Fahrenheit';
        this.form.get('salida')?.setValue(this.kelvinAFahrenheit(entrada));
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

  // Métodos de conversión
  celsiusAFahrenheit(celsius: number): number {
    return celsius * (9 / 5) + 32;
  }

  celsiusAKelvin(celsius: number): number {
    return celsius + 273.15;
  }

  fahrenheitACelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * (5 / 9);
  }

  fahrenheitAKelvin(fahrenheit: number): number {
    return (fahrenheit - 32) * (5 / 9) + 273.15;
  }

  kelvinACelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  kelvinAFahrenheit(kelvin: number): number {
    return (kelvin - 273.15) * (9 / 5) + 32;
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
