import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-plat-list',
  templateUrl: './plat-list.component.html',
  styleUrls: ['./plat-list.component.css']
})
export class PlatListComponent implements OnInit {
  platList;
  constructor(private restService: RestService) { }

  name : 'oussama'
  ngOnInit() {

   /*this.restService.getPlats().subscribe((data)=>{
   console.log(data);
   this.platList = data;*

   })*/


  }

}
