import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-advertisiment',
  templateUrl: './advertisiment.component.html',
  styleUrls: ['./advertisiment.component.css']
})
export class AdvertisimentComponent implements OnInit {
  adversitimentAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private animalService:AnimalService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAdvertisimentAddForm()
  }
  createAdvertisimentAddForm(){
    this.adversitimentAddForm=this.formBuilder.group({
      animalName:["",Validators.required],  
      animalTypeId:["",Validators.required],
      animalGender:["",Validators.required],
      animalAge:["",Validators.required],
      address:["",Validators.required]
    })
  }
  add(){
    console.log(this.adversitimentAddForm.value)
    if(this.adversitimentAddForm.valid){
      let animal:Animal = this.adversitimentAddForm.value;
      console.log(animal);
      
      this.animalService.addAnimal(animal).subscribe((data)=>{
        this.toastrService.success("İlan eklendi","Başarılı")
      }, (error)=>{
        this.toastrService.warning("İlan eklenemedi","Başarısız")
      })
    }else{
      this.toastrService.warning("İlan eklenemedi","Başarısız")
    }



    /*çöz burayı angular 5 !
     if(this.adversitimentAddForm.valid){
      let animalModel = Object.assign({},this.adversitimentAddForm.value)
      this.animalService.add(animalModel).subscribe(response=>{
        this.toastrService.success(response.message,"başarılı")
      /*,responseError=>{s
        if(responseError.console.error(.Errors.length>0){
          this.toastrService.error(responseError.error,"Doğrulama hatası") 
        }
      }*/
    
    }
}

