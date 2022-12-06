import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChDialogComponent } from 'src/app/components/componentes-exAN-06/ch-dialog/ch-dialog.component';


@Component({
  selector: 'app-exercicioan6',
  templateUrl: './exercicioan6.component.html',
  styleUrls: ['./exercicioan6.component.css']
})
export class Exercicioan6Component {

  name: string = ''
  lastname: string = ''
  username: string = ''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  complemento: string = ''
  senha: string = ''
  confirmarsenha: string = ''

  constructor(
    private snack: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  submit(): void {
    console.log(`Name = ${this.name}`)
    console.log(`Last Name = ${this.lastname}`)
    console.log(`Username = ${this.username}`)
    console.log(`Cpf = ${this.cpf}`)
    console.log(`Telefone = ${this.telefone}`)
    console.log(`Endereço = ${this.endereco}`)
    console.log(`Complemento = ${this.complemento}`)
    console.log(`Senha = ${this.senha}`)
    console.log(`Confirmar a senha = ${this.confirmarsenha}`)

    let ref = this.dialog.open(ChDialogComponent)

    ref.componentInstance.namedriven = this.name
    ref.componentInstance.lastnamedriven = this.lastname
    ref.componentInstance.usernamedriven = this.username
    ref.componentInstance.cpfdriven = this.cpf
    ref.componentInstance.telefonedriven = this.telefone
    ref.componentInstance.enderecodriven = this.endereco
    ref.componentInstance.complementodriven = this.complemento

  }

  compararSenha(senha1: any, senha2: any): boolean {
    
    return !(senha1 === senha2)

  }

  data = {
    senha: '',
    confirmarsenha: '',
  };

}
