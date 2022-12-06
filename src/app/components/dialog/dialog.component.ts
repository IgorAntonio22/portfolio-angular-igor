import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public translate: TranslateService ) {  translate.addLangs(['PT-BR', 'EN']);
  translate.setDefaultLang('PT-BR')
}
  switchLanguage(lang: string) {
  this.translate.use(lang)
  
}

  ngOnInit(): void {
  }

}
