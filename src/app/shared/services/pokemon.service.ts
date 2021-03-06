import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageble } from './../models/responsePageble.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl: string = "https://api.pokemontcg.io/v2/cards/";

  constructor(
    private http: HttpClient
  ) { }

  public getPokemons(pg: number, amountPg: number): Observable<ResponsePageble>{
    let httpParams = new HttpParams();
    httpParams = httpParams.set('_page', pg.toString());
    httpParams = httpParams.set('pageSize', amountPg);
    return this.http.get<ResponsePageble>(this.apiUrl, {params: httpParams})
  }
}
