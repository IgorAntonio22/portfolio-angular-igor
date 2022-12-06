import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  titulo: string = 'Basic'

  @Input()
  subtitulo: string = '19.99'

  @Input()
  conteudo: string = '500 GB Storage'

  @Input()
  conteudo1: string = '500 GB Storage'

  @Input()
  conteudo2: string = '500 GB Storage'

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento(): void {
    this.btnClickEvent.emit()
  }
}
