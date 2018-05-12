import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

@Injectable()
export class ProdutosService {

  constructor(private http:Http) { }

  errorHandler = error => console.error('Service error', error);


  public baseUrl = 'http://localhost:3000';

  public colecao="produtos";


  getAll(): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.colecao}`)
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }
}
