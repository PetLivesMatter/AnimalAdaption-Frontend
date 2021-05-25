import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';

const routes: Routes = [
  // pet ==animal
  {path:"",pathMatch:"full",component:AnimalComponent},
  {path:"pets",component:AnimalComponent},
  {path:"pets/petsType/:animalTypeId",component:AnimalComponent} 
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
