import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-crud-disciplina',
  templateUrl: './crud-disciplina.component.html',
  styleUrls: ['./crud-disciplina.component.css']
})
export class CrudDisciplinaComponent implements OnInit {

  nome = "";
  nomeProfessor = "";
  lista = [];
  colecao:String;

  constructor(public disciplinaService:DisciplinaService) {}


  ngOnInit() {
    this.buscaDisciplinas();
  }

  buscaDisciplinas(){
    this.disciplinaService.consulta().then(
      disciplinas => {
        this.lista = disciplinas;
      }
    );
  }

  inserirDisciplina() {
    this.disciplinaService.inserir(this.nome,this.nomeProfessor)
    .then(()=>{
      this.nome="";
      this.nomeProfessor="";
      this.buscaDisciplinas();
    });
  }

  excluirDisciplina(id){
    this.disciplinaService.excluir(id)
    .then(dados => {
      this.buscaDisciplinas();
    });
  }

}