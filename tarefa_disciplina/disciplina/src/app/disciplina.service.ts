import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class DisciplinaService {

  constructor(private http:Http) { }


  public colecao="disciplinas";


  consulta() {
    return this.http.get("http://localhost:3000/disciplinas")
    .toPromise().then(resposta=>resposta.json());
  }

  inserir(nome:string, nomeProfessor:string){
    console.log(nomeProfessor);
    return this.http.post("http://localhost:3000/disciplinas",
    {nome:nome, nomeProfessor:nomeProfessor})
    .toPromise().then(resposta=>resposta.json());
  }

  excluir(id){
    console.log(id);
    return this.http.delete(`http://localhost:3000/disciplinas/${{id}}`)
        .toPromise().then(response => response.json())
  }

}