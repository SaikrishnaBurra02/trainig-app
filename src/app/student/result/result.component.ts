import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  this.studentService.studentData$.subscribe(
    (sucessResponse:any) => {
      console.log(sucessResponse);
      
    }
  )
  }

}
