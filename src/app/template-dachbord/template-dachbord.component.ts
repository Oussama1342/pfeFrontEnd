import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-dachbord',
  templateUrl: './template-dachbord.component.html',
  styleUrls: ['./template-dachbord.component.css']
})
export class TemplateDachbordComponent implements OnInit {

  constructor() { }
images : any[];

  ngOnInit() {
    this.images = [];
    this.images.push({source:'assets/images/2959305.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/scalop.jpg', alt:'Description for Image 1', title:'Title 1'});
  
  }
}
