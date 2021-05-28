import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  }
  createAdvertisimentAddForm(){
    this.adversitimentAddForm=this.formBuilder.group({
      AnimalName:["",Validators.required],  
      AnimalTypeId:["",Validators.required]
    })
  }
  add(){
    console.log("hata eklendi")
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

