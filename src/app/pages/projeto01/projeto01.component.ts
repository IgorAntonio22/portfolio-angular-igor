import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GhDialogProjeto01Component } from 'src/app/components/componentes-projeto-01/gh-users-projeto01/gh-dialog-projeto01/gh-dialog-projeto01.component';

@Component({
  selector: 'app-projeto01',
  templateUrl: './projeto01.component.html',
  styleUrls: ['./projeto01.component.css']
})
export class Projeto01Component implements OnInit {

  usernameToFind: FormControl = new FormControl('', [Validators.required] )

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  showDialog(): void {
    let ref = this.dialog.open(GhDialogProjeto01Component)

    ref.componentInstance.username = this.usernameToFind.value /* acessa o ts do componente gh-dialog, 
    pega a variável referência (username) e transfere o valor para o usernameToFind desse componente. Utiliza-se o component.
    Instance para acessar aquela variável do outro componente. */
  }
}
