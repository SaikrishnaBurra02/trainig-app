import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MensHomeComponent } from './mens/home/home.component';
import { WomensHomeComponent } from './womens/womens-home/womens-home.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'mens', component: MensComponent, children: [
  //     { path: '', component: MensHomeComponent },
  //     { path: 'home', component: MensHomeComponent }
  //   ]
  // },
  {path:'mens', loadChildren:() => import('./mens/mens.module').then(module => module.MensModule)},
  {path:'womens', component:WomensComponent, children:[
    {path:'home', component:WomensHomeComponent}
  ]},
  {path:'kids', loadChildren:()=> import('./kids/kids.module').then(module => module.KidsModule)},
  {path:'student', loadChildren : () => import('./student/student.module').then(module => module.StudentModule)},
  {path:'employee', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
