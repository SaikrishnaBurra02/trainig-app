import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsData : BehaviorSubject<any> = new BehaviorSubject<any>({});
  studentData$=this.studentsData.asObservable();

  constructor() { }

getStudentList(studentList:any){
  console.log(studentList);

  this.studentsData.next(studentList);
  
}
}
