import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {productRecomand} from './Model/productRecomand'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecomandationProductService {
private host : 'http://localhost:7000/items';
private prod : number []
  constructor(private http: HttpClient) { }

  readonly APIUrl = "http://localhost:7000"
  
  getPlatList(): Observable<productRecomand[]>{
    return this.http.get<productRecomand[]>(this.APIUrl+"/items");

  }
}
