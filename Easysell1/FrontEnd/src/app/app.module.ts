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
import { SubdefectsComponent } from './subdefects/subdefects.component';
import { DefectgroupingComponent } from './defectgrouping/defectgrouping.component';


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
    SubdefectsComponent,
    DefectgroupingComponent
   
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