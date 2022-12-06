import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-dialog',
  templateUrl: './ch-dialog.component.html',
  styleUrls: ['./ch-dialog.component.css']
})
export class ChDialogComponent implements OnInit {


  namedriven: string = ''
  lastnamedriven: string = ''
  usernamedriven: string = ''
  cpfdriven: string = ''
  telefonedriven: string = ''
  enderecodriven: string = ''
  complementodriven: string = ''

  constructor() { }

  ngOnInit(): void {
  }


}
