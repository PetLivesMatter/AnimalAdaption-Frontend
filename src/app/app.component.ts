import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnimalAdaption-Frontend';
  hideSidebarLocs = ['/login', '/register', '/question'];
  isLoginContainer:boolean = this.hideSidebarLocs.includes(window.location.pathname);
  ngOnInit(): void {
    this.router.events.subscribe(val=>{
      if(this.hideSidebarLocs.includes(window.location.pathname)){
        this.isLoginContainer=false;
      }else{  
        this.isLoginContainer=true;
      }
      
    })
    
  }
  constructor(
    private router:Router) { }
  
}
