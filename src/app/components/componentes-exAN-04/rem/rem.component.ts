import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rem',
  templateUrl: './rem.component.html',
  styleUrls: ['./rem.component.css']
})
export class RemComponent {
  
  @Output()
  btnClickEvent1: EventEmitter<any> = new EventEmitter<any>()

  @Input() tarefas: Array<string> = []
  
  @Input() clearAll(): void {
    this.tarefas.splice(0, this.tarefas.length)
    this.save
  }

  @Input() emitirEvento1(): void {
    this.btnClickEvent1.emit()
  }  

  save(): void {
    localStorage.setItem('Dados', JSON.stringify(this.tarefas))
  }

  load(): void{
    if(localStorage.getItem('Dados') != null) {
      this.tarefas = JSON.parse( '' + localStorage.getItem('Dados'))
    }
  }
}
