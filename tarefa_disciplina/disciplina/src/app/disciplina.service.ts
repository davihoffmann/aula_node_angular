import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class DisciplinaService {

  public baseUrl = 'http://localhost:3000';

  public collection = 'disciplinas';
  
  constructor(private http:Http) { }


  public colecao="disciplinas";


  consulta() {
    return this.http.get(`${this.baseUrl}/${this.collection}`)
    .toPromise().then(resposta=>resposta.json());
  }

  getOne(id): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  inserir(nome:string, nomeProfessor:string){
    return this.http.post(`${this.baseUrl}/${this.collection}/`,
    {nome:nome, nomeProfessor:nomeProfessor})
    .toPromise().then(resposta=>resposta.json());
  }

  excluir(id) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  alterar(disciplina) {
    return this.http.put(`${this.baseUrl}/${this.collection}/${disciplina.id}`, disciplina)
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

}