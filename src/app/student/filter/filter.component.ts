import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  studentList:any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  getAllStudent() {

    this.appService.getAllStudentList();

  }

}
