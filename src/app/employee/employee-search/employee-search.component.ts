import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {

  employeesData:any;
  IDsList:string[]= [];

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.getAllEmployeeIDs();
  }

  getAllEmployee(){
this.appService.getAllEmployeeList().subscribe(
  (sucessResponse:any) => {
    this.employeesData = sucessResponse;
    console.log( this.employeesData);
    

  },
  (errorResponse:any) => {}
)
  }

  getAllEmployeeIDs(){
    this.appService.getAllIds().subscribe(
      (sucessResponse:any) => {
        this.IDsList = sucessResponse.data;
        console.log(sucessResponse);
        console.log(this.IDsList);
        
        
      },
      (errorResponse:any) => {}
    )
  }

}
