import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EpService } from '../ep.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: any;

  constructor(private router : Router, private empService: EpService) { 
     this.user = {loginId:'', password: ''}; 
  }

  ngOnInit(): void {
  }
  loginUser(): void {
    console.log('loginuser method is called....');
    console.log(this.user);
  }
  validateUser(loginForm:any): void {
   if(loginForm.loginId === 'admin' && loginForm.password === 'admin'){
          this.empService.setUserLoggedIn();
          this.router.navigate(['products']);
   }
   else{
     alert('Invalid Credentials');
     
   }
    console.log(loginForm);
  }
 

}
