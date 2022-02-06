import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentService } from './app/student/student.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(private httpClient:HttpClient, private studentService:StudentService) { }

 getAllStudentList(){

  this.httpClient.get('http://localhost:3010/api/student').subscribe(
    (sucessResponse:any) => {

     console.log(sucessResponse);
     this.studentService.getStudentList(sucessResponse)
     
    },
    (errorResponse:any)=>{}
  )
 
}

getAllEmployeeList(){
  return this.httpClient.get('http://localhost:3010/api/student')
}

getAllIds(){
 return this.httpClient.get("http://localhost:3010/api/getAllIds")
}

}
