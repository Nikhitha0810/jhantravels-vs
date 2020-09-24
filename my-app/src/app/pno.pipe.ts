import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pno'
})
export class PnoPipe implements PipeTransform {

  transform(value: any,phno:any,country:any): any {
    if(country === 'INDIA'){
      return '+91'+' '+phno;
    }
    else if(country === 'uk'){
      return '+81'+' '+phno;
    }
    else{
      return '+1'+' '+phno;
    }
    
  }

}
