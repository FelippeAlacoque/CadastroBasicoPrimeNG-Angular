import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { AlunoCadastroComponent } from './alunos/aluno-cadastro/aluno-cadastro.component';
import { AlunoListagemComponent } from './alunos/aluno-listagem/aluno-listagem.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoCadastroComponent,
    AlunoListagemComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    InputTextModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    InputMaskModule,

    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
