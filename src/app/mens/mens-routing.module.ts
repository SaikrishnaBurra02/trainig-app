import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomsComponent } from './bottoms/bottoms.component';
import { MensComponent } from './mens.component';
import { TopsComponent } from './tops/tops.component';

const routes: Routes = [
  {path:'', component:MensComponent, children:[
    {path:'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)},
    {path:'tops', component:TopsComponent},
    {path:'bottoms', component:BottomsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensRoutingModule { }
