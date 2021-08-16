import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  login_details:any = {"email":"","password":""};

  result:any;

  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }

  login():any{
      
      this.service.loginFn(this.login_details).subscribe((posRes)=>{
          this.result = posRes;
      },(errRes:HttpErrorResponse)=>{ 
          if(errRes.error instanceof Error){
            console.log("client side error");
          }else{
            console.log("server side error");
          }
      });
  }

}
