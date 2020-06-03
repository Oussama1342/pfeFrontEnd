import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';
import {RecomandationProductService} from './recomandation-product.service'

 
@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {
 
  private client: Client;
  private listepro :number[] =[101 ,45];
  private outputArray = [] ;
  private searchIndex : number[]  = this.outputArray.filter(item=>{ return this.idProduct===item[1]});
  private idProduct:number=101; 

  private queryalldocs = {
    'query': {
      'match_all': {}
    }
  };
 
  constructor(private rs : RecomandationProductService) {
    if (!this.client) {
      this._connect();
    }
  }
 



  private connect() {
    this.client = new Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });
  }
 
  private _connect() {
    this.client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace'
    });
  }
 
  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello elastic!'
    });
  }
  getAllDocuments(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
      body: this.queryalldocs,
      filterPath: ['hits.hits._source']
    });
  }
  fullTextSearch(_index, _type, _field, _queryText): any {
    return this.client.search({
      index: _index,
      type: _type,
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body: {
        'query': {
          'match_phrase_prefix': {
            [_field]: _queryText,
          }
        }
      },
      '_source': ['nameproduct', 'idProduct','price', 'image']
    });
  }






  private queryRecomandedDoc = {
    'query': {
      'terms': {
        'idProduct': this.outputArray[0] //this.outputArray.filter(item=>{ return this.idProduct===item[1]})[0]
      }
    }
  };

  getRecomendedDoc(_index, _type):any {
    return this.client.search({
      index: _index,
      type: _type,
      body: this.queryRecomandedDoc,
      filterPath: ['hits.hits._source']
    });
  }


 getRecomandation(){
    this.rs.getPlatList().subscribe(data=>this.outputArray= data);
    this.searchIndex =this.outputArray.filter(item=>{
      return this.idProduct===item[1]
  
    });
  }

  testArray(){
    console.log(this.outputArray[0])
  }

}