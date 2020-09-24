import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    
  age: number;
  name: string;
  salary: number;
  isEmployee: boolean;
  hobbies: any;
  address: any;
  message:string;
  constructor() {
    this.age = 20;
    this.name = 'nikhitha';
    this.salary = 200000;
    this.isEmployee = true;
    this.hobbies = ['eating','drawing','sleeping','reading'];
     this.address =  {doorNo: '10-10/A/B', street: 'nizampet',city: 'hyderabad'};
   }

  ngOnInit(): void {
  }
showMessage(){
  alert('show method is executed....');
  console.log(this.message);
}
}
