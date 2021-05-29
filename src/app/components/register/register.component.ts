import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { registerModel } from 'src/app/models/registerModel';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private routerService:Router,
    private authService:AuthService,
    private toastrService:ToastrService

  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  register(){
    if(this.registerForm.valid){
     let registerModel:registerModel=this.registerForm.value
      this.authService.register(registerModel).subscribe((data)=>{
        //console.log(data)
        localStorage.setItem("token",data.token)
        this.toastrService.success("kayıt olundu "," kayıt başarılı")
        this.routerService.navigate(["/"])
        setTimeout(() => {
          
          window.location.reload()
        }, 250);
        
      },(error)=>{
        this.toastrService.error("kayıt yapılamadı","kayıt başarısız")
      })
        
      
    }
  }

}
