import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MensComponent } from './mens/mens.component';
import { HomeComponent } from './home/home.component';
import { WomensComponent } from './womens/womens.component';
import { WomensHomeComponent } from './womens/womens-home/womens-home.component';
import { WomensTopsComponent } from './womens/womens-tops/womens-tops.component';
import { WomensBottomsComponent } from './womens/womens-bottoms/womens-bottoms.component';
import { KidsHomeComponent } from './kids/kids-home/kids-home.component';
import { KidsTopsComponent } from './kids/kids-tops/kids-tops.component';
import { KidsBottomsComponent } from './kids/kids-bottoms/kids-bottoms.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeSearchComponent } from './employee/employee-search/employee-search.component';
import { EmployeeTableComponent } from './employee/employee-search/employee-table/employee-table.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MensComponent,
    HomeComponent,
    WomensComponent,
    WomensHomeComponent,
    WomensTopsComponent,
    WomensBottomsComponent,
    KidsHomeComponent,
    KidsTopsComponent,
    KidsBottomsComponent,
    EmployeeComponent,
    EmployeeSearchComponent,
    EmployeeTableComponent,
    

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
