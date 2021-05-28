import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalTypeComponent } from './components/animal-type/animal-type.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AdvertisimentComponent } from './components/advertisiment/advertisiment.component';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"

import{ToastrModule} from "ngx-toastr";
import { LoginComponent } from './components/login/login.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    AnimalComponent,
    AnimalTypeComponent,
    FilterPipe,
    AdvertisimentComponent,
    LoginComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
