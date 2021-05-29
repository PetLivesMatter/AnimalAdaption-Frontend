import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { animalType } from 'src/app/models/animalType';
import { AnimalTypeService } from 'src/app/services/animal-type.service';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.css']
})
export class AnimalTypeComponent implements OnInit {
  
  animalTypes:animalType[]=[];
  currentAnimalType:animalType = {
    animalTypeId: -1,
    animalTypeName: '', 
    Description: ''
  };
  isModalOpen:boolean = false;
  animalTypeAddForm:FormGroup;
  constructor(private animalTypeService:AnimalTypeService,
    private animalService:AnimalService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAnimalTypes();
    this.createAnimalTypeAddForm();
  }
  createAnimalTypeAddForm(){ 
    this.animalTypeAddForm=this.formBuilder.group({
      animalTypeName:["",Validators.required],
      Description:[""],
      animalTypeId:[0,Validators.required]
    })
  }
  add(){
    console.log(this.animalTypeAddForm.value)
    if(this.animalTypeAddForm.valid){
      let animalType:animalType = this.animalTypeAddForm.value;
      console.log(animalType);
      
      this.animalTypeService.addAnimalTypes(animalType).subscribe((data)=>{
        this.toastrService.success("Pet türü eklendi","Başarılı")
        this.isModalOpen = !this.isModalOpen;
        this.animalTypes.push(animalType);
      }, (error)=>{
        this.toastrService.warning("Pet türü eklenemedi","Başarısız")
      })
    }else{
      this.toastrService.warning("Pet türü eklenemedi","Başarısız")
    }
  }
  getAnimalTypes(){
    this.animalTypeService.getAnimalTypes().subscribe(response=>{
      this.animalTypes = response.data
    })
  }
  setCurrentAnimalType(animalType:animalType){
    console.log(animalType);
    
    this.currentAnimalType = animalType;
  }

  resetCurrentAnimalType(){
    this.currentAnimalType = {
      animalTypeId: -1,
      animalTypeName: '',
      Description: ''
    };
  }

  getCurrentAnimalTypeClass(animalType:animalType){
    if(animalType==this.currentAnimalType){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }

  }

  getAllAnimalTypeClass(){
    const status = this.currentAnimalType.animalTypeId == -1
    if(status){
      return "list-group-item active"
    }
    else{  
      return "list-group-item "
    }
  }
  addAnimalType(animalType:animalType){
    this.animalTypeService.addAnimalTypes(animalType);
  }

  openModalClass(){
    if (this.isModalOpen) {
      return 'modal fade show d-block'
    } else {
      return 'modal fade';
    }
  }

}
