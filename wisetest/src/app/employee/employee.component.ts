import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any;
  constructor() {
      this.employees = [{empId:100,empName:"nikhitha",basicsal:'200000',dob:'8/10/2000'},
      {empId:101,empName:"amulya",basicsal:'200000',dob:'7/4/2000'}]
   }

  ngOnInit(): void {
  }

}
