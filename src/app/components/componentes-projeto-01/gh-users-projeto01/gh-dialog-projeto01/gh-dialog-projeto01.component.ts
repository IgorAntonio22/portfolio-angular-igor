import { Component, OnInit } from '@angular/core';
import { GhRepository } from '../../models/ghRepository';
import { GhUser } from '../../models/ghUser';
import { GhApiProjeto01Service } from '../../services/gh-api-projeto01.service';

@Component({
  selector: 'app-gh-dialog-projeto01',
  templateUrl: './gh-dialog-projeto01.component.html',
  styleUrls: ['./gh-dialog-projeto01.component.css']
})
export class GhDialogProjeto01Component {

  username: string = ''
  user!: GhUser
  repository!: GhRepository[]

  constructor( // injetando o service (gh-api.service) no componente (injeção de dependência)
    private ghService: GhApiProjeto01Service
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe( // funções de sucesso, erro e concluido.
    (ghUser) => {
      this.user = ghUser // para dentro de uma propriedade do angular chamada user (da pra ver no visualizador do angular na web, no gh-dialog)

    
    }, (error) => console.log('Erro: ' + error)

    )  //é necessário se inscrever nesse observable que vai ser retornado (.subscribe)

    
  this.ghService.findUserRepository(this.username).subscribe(
      (data) => {

        this.repository = data

        }, (error) => console.log('Erro: ' + error)
    )
  }
}
