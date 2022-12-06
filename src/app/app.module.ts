import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ExerciciosJSComponent } from './pages/exercicios-js/exercicios-js.component';
import { Exercicio1Component } from './pages/exerciciojs1/exercicio1.component';
import { Exercicio2Component } from './pages/exerciciojs2/exercicio2.component';
import { Exercicio3Component } from './pages/exerciciojs3/exercicio3.component';
import { Exercicio4Component } from './pages/exerciciojs4/exercicio4.component';
import { Exercicio5Component } from './pages/exerciciojs5/exercicio5.component';
import { Exercicio6Component } from './pages/exerciciojs6/exercicio6.component';
import { Exercicio7Component } from './pages/exerciciojs7/exercicio7.component';
import { Exercicio8Component } from './pages/exerciciojs8/exercicio8.component';
import { ExerciciosANComponent } from './pages/exercicios-an/exercicios-an.component';
import { Exercicioan1Component } from './pages/exercicioan1/exercicioan1.component';
import { InputButtonComponent } from './components/componentes-exAN-01/input-button/input-button.component';
import { InputTextComponent } from './components/componentes-exAN-01/input-text/input-text.component';
import { InputEmailComponent } from './components/componentes-exAN-01/input-email/input-email.component';
import { InputPasswordComponent } from './components/componentes-exAN-01/input-password/input-password.component';
import { Exercicioan2Component } from './pages/exercicioan2/exercicioan2.component';
import { Exercicioan3Component } from './pages/exercicioan3/exercicioan3.component';
import { CardComponent } from './components/componentes-exAN-03/card/card.component';
import { Exercicioan4Component } from './pages/exercicioan4/exercicioan4.component';
import { CmpComponent } from './components/componentes-exAN-04/cmp/cmp.component';
import { RemComponent } from './components/componentes-exAN-04/rem/rem.component';
import { StyleDirective } from './directives/style.directive';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Exercicioan5Component } from './pages/exercicioan5/exercicioan5.component';
import { GhDialogComponent } from './components/componentes-exAN-05/gh-dialog/gh-dialog.component';
import { GhHomeComponent } from './components/componentes-exAN-05/gh-home/gh-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GhUsersModule } from './gh-users.module';
import { Exercicioan6Component } from './pages/exercicioan6/exercicioan6.component';
import { ChHomeComponent } from './components/componentes-exAN-06/ch-home/ch-home.component';
import { ChDialogComponent } from './components/componentes-exAN-06/ch-dialog/ch-dialog.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { GhDialogProjeto01Component } from './components/componentes-projeto-01/gh-users-projeto01/gh-dialog-projeto01/gh-dialog-projeto01.component';
import { Projeto01Component } from './pages/projeto01/projeto01.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PortfolioComponent,
    ContatoComponent,
    DialogComponent,
    ExerciciosJSComponent,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio6Component,
    Exercicio7Component,
    Exercicio8Component,
    ExerciciosANComponent,
    Exercicioan1Component,
    InputTextComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputButtonComponent,
    Exercicioan2Component,
    Exercicioan3Component,
    CardComponent,
    Exercicioan4Component,
    CmpComponent,
    RemComponent,
    StyleDirective,
    Exercicioan5Component,
    Exercicioan6Component,
    ProjetosComponent,
    Projeto01Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GhUsersModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
