import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-exercicios-js',
  templateUrl: './exercicios-js.component.html',
  styleUrls: ['./exercicios-js.component.css']
})
export class ExerciciosJSComponent implements OnInit {

  constructor(public translate: TranslateService ) {  translate.addLangs(['PT-BR', 'EN']);
  translate.setDefaultLang('PT-BR')
}
  switchLanguage(lang: string) {
  this.translate.use(lang)
  
}

  ngOnInit(): void {
  }

}
