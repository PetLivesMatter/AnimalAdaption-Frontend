import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService,
    private routerService:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
     let loginModel:LoginModel=this.loginForm.value
      this.authService.login(loginModel).subscribe((data)=>{
        //console.log(data)
        localStorage.setItem("token",data.token);
        //localStorage.setItem("userId",data.token);
        this.toastrService.success("giriş yapıldı","başarılı")
        this.routerService.navigate(["/"])

        
      },(error)=>{
        this.toastrService.error("giriş yapılamadı","başarısız")
      })
        
      
    }
  }

}
