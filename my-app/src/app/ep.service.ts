import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpService {
  private isUserLogged: any;

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }

   setUserLoggedIn(): void {
     this.isUserLogged = true;
   }

   setUserLoggedOut(): void {
     this.isUserLogged = false;
   }

   getUserLogged(): any {
     return this.isUserLogged;
   }

   getCountriesList(): any{
    return this.httpClient.get('https://restcountries.eu/rest/v2/all');
   }

   getAllEmployeesList():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllEmployees');
   }
   getEmpById(empid:any):any{
     return this.httpClient.get('RESTAPI/webapi/myresource/getEmployeeById/'+empid);
  }
  registerEmp(employee:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerEmp',employee)
  }
  
  deleteEmp(empId:any){
    return this.httpClient.delete('RESTAPI/webapi/myresource/deleteEmp/'+empId);
  }
  updateEmp(editObject:any){
    return this.httpClient.put('RESTAPI/webapi/myresource/updateEmp',editObject);
  }
  getAllDepartment(): any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllDepartments')

  }
}
