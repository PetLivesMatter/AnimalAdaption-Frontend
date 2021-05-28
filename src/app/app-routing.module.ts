import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisimentComponent } from './components/advertisiment/advertisiment.component';
import { AnimalComponent } from './components/animal/animal.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionComponent } from './components/question/question.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  // pet ==animal
  {path:"",pathMatch:"full",component:AnimalComponent},
  {path:"pets",component:AnimalComponent},
  {path:"pets/petsType/:animalTypeId",component:AnimalComponent},
  {path:"pets/add",component:AdvertisimentComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"question",component:QuestionComponent}
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
