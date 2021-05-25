import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';

import { AnimalComponent } from './components/animal/animal.component';
import { AnimalTypeComponent } from './components/animal-type/animal-type.component';





@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    AnimalComponent,
    AnimalTypeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
