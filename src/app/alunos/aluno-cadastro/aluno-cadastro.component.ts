import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {

  planos = [
    {label:'Mensal', value:1},
    {label:'Trimestral', value:2},
    {label:'Semestral', value:3},
    {label:'Personal', value:4}
  ];

  sexos = [
    {label:'Masculino', value:1},
    {label:'Feminino', value:2}
  ];

  estados = [
    {label:'Minas Gerais', value:1}
  ];

  constructor() { }

  ngOnInit() {
  }

}
