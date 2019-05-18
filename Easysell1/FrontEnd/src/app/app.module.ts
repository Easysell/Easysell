import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthService } from './auth.service';
import { MembersuserComponent } from './membersuser/membersuser.component';
import { CategoryComponent } from './category/category.component';
import { ApiService } from './api.service';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { RegisterComponent } from './register/register.component';
import { RegistervendorComponent } from './registervendor/registervendor.component';
import { BrandComponent } from './brand/brand.component';
import { BrandlistComponent } from './brandlist/brandlist.component';
import { DefectaddingComponent } from './defectadding/defectadding.component';
import { AdditemComponent } from './additem/additem.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TelevisionComponent } from './television/television.component';
import { ImacComponent } from './imac/imac.component';
import { BikeComponent } from './bike/bike.component';
import { CarComponent } from './car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MembersComponent,
    MembersuserComponent,
    CategoryComponent,
    CategorylistComponent,
    RegisterComponent,
    RegistervendorComponent,
    BrandComponent,
    BrandlistComponent,
    DefectaddingComponent,
    AdditemComponent,
    MobilesComponent,
    LaptopComponent,
    TabletComponent,
    TelevisionComponent,
    ImacComponent,
    BikeComponent,
    CarComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*providers: [AuthService, AuthGuard, EventService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
}],*/