import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {
  age : any;
  presentYear : any;
  birthYear : any;
  transform(value: any,dob:any): any {
    this.presentYear = new Date().getUTCFullYear();
    this.birthYear = new Date(dob).getUTCFullYear();
    this.age = this.presentYear - this.birthYear;
    if(this.age <60){
    if(value <= 250000){
      return "Nil";
    }
    else if(value > 250001 && value<500000){
      return (5*value)/100;
    }
    else if(value >500001 && value<1000000){
      return 12500 + (20 * (value - 500000))/100;
    }
    else{
      return 112500 + (30 * (value - 1000000))/100;
    }
  }
  }

}
