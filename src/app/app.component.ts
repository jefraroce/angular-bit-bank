import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cuentaAbierta = false;
  cliente = '';
  saldo = 0;

  abrirCuenta() {
    if (this.cliente !== '' && this.saldo > 0) {
      this.cuentaAbierta = true;
    } else {
      alert('Debes completar la información');
    }
  }

  consignar() {
    const valorConsignado = parseInt( prompt('Digita el valor a consignar') )
    this.saldo = this.saldo + valorConsignado
  }

  retirar() {
    const valorARetirar = parseInt(prompt('Digita el valor a retirar'))
    this.saldo = this.saldo - valorARetirar
  }
}
