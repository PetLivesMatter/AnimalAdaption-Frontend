import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnimalAdaption-Frontend';
  isLoginContainer:boolean=window.location.pathname!=="/login";
  ngOnInit(): void {
    this.router.events.subscribe(val=>{
      if(window.location.pathname==="/login"||window.location.pathname==="/register"){
        this.isLoginContainer=false;
      }else{  
        this.isLoginContainer=true;
      }
      
    })
    
  }
  constructor(
    private router:Router) { }
  
}
