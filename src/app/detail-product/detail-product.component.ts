import { Component, OnInit , Input} from '@angular/core';
import {Product} from '../Model/product.interface'
import { productRecomand } from '../Model/productRecomand'
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  @Input() product:Product;
  imagesList = [];
  @Input()prodlist : Product [];
  constructor() { 
      
  }

  ngOnInit() {
    
  }

 

}
