import { Component, OnInit } from '@angular/core';
import { EpService } from '../ep.service';

@Component({
  selector: 'app-empbyid',
  templateUrl: './empbyid.component.html',
  styleUrls: ['./empbyid.component.css']
})
export class EmpbyidComponent implements OnInit {
  public employee: any;
  public empId:any;
  constructor(private service: EpService) { }

  ngOnInit(): void {
  }
  getEmpByid(){
     this.service.getEmpById(this.empId).subscribe((result: any) => {console.log(result);this.employee = result});
  }

}
