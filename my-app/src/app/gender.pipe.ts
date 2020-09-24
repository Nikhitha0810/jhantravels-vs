import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  
  transform(value:any,gender:any,name:any): any {
    if(gender === 'f'){
      return 'Miss'+ ' ' + name;
        }
        else{
            return 'Mr'+' '+name;
        }
  }

}
