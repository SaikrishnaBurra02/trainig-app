import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // navigateTo(){
  //   this.router.navigate([])
  // }

}
