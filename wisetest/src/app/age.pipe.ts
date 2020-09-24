import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  currentYear:any;
  dateofbirth:any;
  age:any;
  transform(value: any): any {
    this.currentYear = new Date().getFullYear();
    this.dateofbirth = new Date(value).getFullYear();
    this.age = this.currentYear-this.dateofbirth;
    return this.age;
  }

}
