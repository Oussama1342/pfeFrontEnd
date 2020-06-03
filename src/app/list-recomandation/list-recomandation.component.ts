import { Component, OnInit } from '@angular/core';
import { productRecomand } from '../Model/productRecomand'
import {RecomandationProductService} from '../recomandation-product.service'
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';
import {ProductSource} from '../Model/product.interface'
import { error } from 'util';
import {ElasticsearchService} from '../elasticsearch.service'
import { PlatListComponent } from '../plat-list/plat-list.component';
import { element } from 'protractor';
import { runInThisContext } from 'vm';




@Component({
  selector: 'app-list-recomandation',
  templateUrl: './list-recomandation.component.html',
  styleUrls: ['./list-recomandation.component.css']
})
export class ListRecomandationComponent implements OnInit {
  private client: Client;
  private idProduct:number=1; 

  //
  private static readonly INDEX = 'pfefront';
  private static readonly TYPE = 'product';

  productSources : ProductSource[];
  valueparsed : number []

  constructor(private ps : RecomandationProductService, private es: ElasticsearchService){
    if (!this.client) {
      this._connect();
    }
    console.log(this.valueparsed)

  }

  private _connect() {
    this.client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace'
    });
  }
  t = [] ;
  prodlist : Map<Number,Number>=new Map(); 
  prodtab=[];
  outputArray = [] ;
 private searchIndex : string [] ;

  ngOnInit() {
  this.ps.getPlatList().subscribe(data=>this.outputArray= data,
                                  err=>console.error(err),
                                  ()=>{console.log(this.outputArray,
                                  this.prodlist=this.outputArray.filter(
                                    item=> { 
                                      return this.idProduct===item[1]})[0]) 
                                     
                                      for(let i=2;i<=6;i++){
                                        this.prodtab.push(this.prodlist[i])
                                      }
                                    }
                                     
                                    );
                                  
   
  
}





/////Partie Recomandation
private queryRecomandedDoc = {
  'query': {
    'terms': {
      'idProduct':  this.prodtab
    }
  }
};
///////
testRecom(){
  return this.getRecomendedDoc(ListRecomandationComponent.INDEX,ListRecomandationComponent.TYPE)
     .then(response=> {
       this.productSources = response.hits.hits;
       console.log(response);
     },error=>{console.log(error);
    }).then(()=>{
      console.log('Recomandation Completed');
    })

}
///
getRecomendedDoc(_index, _type):any {
  return this.client.search({
    index: _index,
    type: _type,
    body: this.queryRecomandedDoc,
    filterPath: ['hits.hits._source']
  });
}





//appel Recomandation

getdocRecom(){
  return this.es.getRecomendedDoc(ListRecomandationComponent.INDEX,ListRecomandationComponent.TYPE)
  .then(response=> {
    this.productSources = response.hits.hits;
    console.log(response);
  },error=>{console.log(error);    }).then(()=>{

 }).then(()=>{
   console.log('Recomandation Completed');
 })
}













testr(){
//console.log(JSON.stringify(this.outputArray.filter(item=>{ return this.idProduct===item[1]})[0]));
//console.log(typeof(this.outputArray.filter(item=>{ return this.idProduct===item[1]})[0][1]))
//console.log(typeof(6))
//return this.es.testArray
console.log(JSON.stringify(this.prodlist))
}

testMultiple(){
  //this.searchIndex =this.prodlist[0];
  console.log(this.t)
  for (const element in this.prodlist){
          this.t.push(this.prodlist[element]);
          console.log(this.prodlist[element]);
        }
    }
  

}
