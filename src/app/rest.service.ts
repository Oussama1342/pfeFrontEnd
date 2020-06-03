import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {productRecomand} from './Model/productRecomand'
import * as elasticsearch from 'elasticsearch-browser';
@Injectable({
  providedIn: 'root'
})
export class RestService {
private client : elasticsearch.Client

  constructor(private http : HttpClient) { }

private connect(){
  this.client = new elasticsearch.Client({
    host : 'localhost:9200',
    log:'trace'
  });
}
private ping (){
  this.client.ping({
    requestTimeout: Infinity,
    body: 'hello JavaSampleApproach!'
  });
}


   public getPlats(){
    return this.http.get<productRecomand[]>('http://localhost:5000/items');
  }
}
