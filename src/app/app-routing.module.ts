import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatListComponent } from './plat-list/plat-list.component';
import {DetailProductComponent} from './detail-product/detail-product.component'
import {ShowProductComponent} from './show-product/show-product.component'
import {AuthenticationComponent} from './authentication/authentication.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListRecomandationComponent } from './list-recomandation/list-recomandation.component';

const routes : Routes = [
  {path:'detP', component : DetailProductComponent},
  {path : 'shP', component : ShowProductComponent},
  {path : 'login' , component : AuthenticationComponent},
  {path:'acceuil',component: AcceuilComponent},
  {path:'recomandation', component: ListRecomandationComponent},

  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect 
]
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
