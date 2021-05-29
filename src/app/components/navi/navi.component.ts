import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLoggedin:boolean=false
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggedin=this.authService.isAuthenticated();
  }
  home(){
    this.router.navigate([""])
  }
  login(){
    this.router.navigate(["login"])
    
  }
  register(){
    this.router.navigate(["register"])
  }
  question(){
    this.router.navigate(["question"])
  }
  logOut(){
    this.authService.logOut();
    
    window.location.reload()
  }
}
