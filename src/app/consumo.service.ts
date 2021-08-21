import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  url_busca = "https://api.themoviedb.org/3/movie/"
  url_queries="?api_key=3708b61e38d0ceaa4f797ba1ac2f4069&language=pt-BR"
  constructor(private http:HttpClient) { }

  getList():Observable<any>{
     return  this.http.get<any>(environment.url_geral)

  }
  buscaDetalhes(id:any):Observable<any>{
      return this.http.get<any>(this.url_busca+id+this.url_queries)
  }
}
