import { Component, OnInit } from '@angular/core';
import {ProductSource} from '../Model/product.interface'
import {ElasticsearchService} from '../elasticsearch.service'
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  private static readonly INDEX = 'pfefront';
  private static readonly TYPE = 'product';
  
  productSources : ProductSource[]
  constructor(private es : ElasticsearchService) { }


  
    ngOnInit() {
      this.es.getAllDocuments(ShowProductComponent.INDEX, ShowProductComponent.TYPE)
        .then(response => {
          this.productSources = response.hits.hits;
          console.log(response);
        }, error => {
          console.error(error);
        }).then(() => {
          console.log('Show product  Completed!');
        });
    }
  

}
