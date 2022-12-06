import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-exercicios-an',
  templateUrl: './exercicios-an.component.html',
  styleUrls: ['./exercicios-an.component.css']
})
export class ExerciciosANComponent implements OnInit {

  constructor(public translate: TranslateService ) {  translate.addLangs(['PT-BR', 'EN']);
  translate.setDefaultLang('PT-BR')
}
  switchLanguage(lang: string) {
  this.translate.use(lang)
  
}


  ngOnInit(): void {
  }

}
