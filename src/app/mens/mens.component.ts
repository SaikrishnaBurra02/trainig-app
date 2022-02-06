import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToMensHome(){
  this.router.navigate(['mens/home']);
  }

  navigateToMensTops(){
    this.router.navigate(['mens/tops']);
  }
  navigateToMensBottoms(){
    this.router.navigate(['mens/bottoms']);
  }


}
