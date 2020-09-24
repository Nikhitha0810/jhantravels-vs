import { Component, OnInit } from '@angular/core';
import { EpService } from '../ep.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:any;
countries: any;
departments: any;
  constructor(private service: EpService) {
    this.user = {empId:'',empName:'',salary:'',doj:'',mobile:'',gender:'',country:'',loginId:'',password:'',deptId:'',location:''};
   }

  ngOnInit(): void {
    this.service.getCountriesList().subscribe((data:any) => {console.log(data);this.countries = data});
    this.service.getAllDepartment().subscribe((data:any) => {console.log(data);this.departments = data})
  }
  registerUser(registerForm): void {
    this.service.registerEmp(registerForm).subscribe((result:any) => console.log("success"))
    console.log(registerForm);
  }
  validateUser(registerForm:any): void {
    console.log('validateuser method is called...');
    console.log(registerForm);
  }
  getCountries(): any{
      return this.service.getCountriesList();
 }

}
