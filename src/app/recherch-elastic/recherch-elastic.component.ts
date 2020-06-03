import { Component, OnInit } from '@angular/core';
import {ProductSource} from '../Model/product.interface';
import {ElasticsearchService} from '../elasticsearch.service'

@Component({
  selector: 'app-recherch-elastic',
  templateUrl: './recherch-elastic.component.html',
  styleUrls: ['./recherch-elastic.component.css']
})
export class RecherchElasticComponent implements OnInit {
  private static readonly INDEX = 'pfefront';
  private static readonly TYPE = 'product';
  //
  productSources : ProductSource[]
  private queryText = '';
  private lastKeypress = 0;
  constructor(private es:ElasticsearchService) {this.queryText='' }

  ngOnInit() {
  }

  search($event) {
    if ($event.timeStamp - this.lastKeypress > 100) {
      this.queryText = $event.target.value;
 
      this.es.fullTextSearch(
        RecherchElasticComponent.INDEX,
        RecherchElasticComponent.TYPE,
        'nameproduct', this.queryText).then(
          response => {
            this.productSources = response.hits.hits;
            console.log(response);
          }, error => {
            console.error(error);
          }).then(() => {
            console.log('Search Completed!');
          });
    }
 
    this.lastKeypress = $event.timeStamp;
  }
}
