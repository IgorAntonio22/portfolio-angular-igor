import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-exercicioan3',
  templateUrl: './exercicioan3.component.html',
  styleUrls: ['./exercicioan3.component.css']
})
export class Exercicioan3Component {


  constructor(private _snackBar: MatSnackBar) {}

  mostrarSnackBar(): void {
    this._snackBar.open('Pacote comprado', 'Fechar')
  }

}
