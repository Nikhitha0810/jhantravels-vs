import { Component, OnInit } from '@angular/core';
import { EpService } from '../ep.service';
declare var jQuery: any;
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
   employee: any;
   editObject: any;
  constructor(private service: EpService) { 
    this.editObject = {empId: '',empName:'',gender:'',salary:'',doj:'',phno:'',country:''}
 }

  ngOnInit(): void {
    this.service.getAllEmployeesList().subscribe((result:any) => {console.log(result);this.employee = result})
  }

  deleteEmp(employee: any): void {
    //alert("hi");
    this.service.deleteEmp(employee.empId).subscribe((result:any) => {
      const i =this.employee.findIndex((element) => {return element.empId === employee.empId;});
      this.employee.splice(i,1);
    });
  }
  
  showEditPopup(employee:any){
    this.editObject = employee;
    jQuery('#empModel').modal('show');
  }
  updateEmp(){
    this.service.updateEmp(this.editObject).subscribe();
    console.log(this.editObject);
  }

}
