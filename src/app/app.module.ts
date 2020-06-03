import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlatListComponent } from './plat-list/plat-list.component';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { TestEsComponent } from './test-es/test-es.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { TemplateDachbordComponent } from './template-dachbord/template-dachbord.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import {RecomandationProductService } from './recomandation-product.service'
import { from } from 'rxjs';
import { ListRecomandationComponent } from './list-recomandation/list-recomandation.component';
import { TemplateNavComponent } from './template-nav/template-nav.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthentificationService} from './authentification.service'
import { JwtModule } from '@auth0/angular-jwt';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RecherchElasticComponent } from './recherch-elastic/recherch-elastic.component';

const routes: Routes = [{path:'paltlist', component: PlatListComponent}];


@NgModule({
  declarations: [
    AppComponent,
    PlatListComponent,
    TestEsComponent,
    DetailProductComponent,
    ShowProductComponent,
    TemplateDachbordComponent,
    ListRecomandationComponent,
    TemplateNavComponent,
    AuthenticationComponent,
    AcceuilComponent,
    RecherchElasticComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeferLoadModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RestService,
    RecomandationProductService,
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
