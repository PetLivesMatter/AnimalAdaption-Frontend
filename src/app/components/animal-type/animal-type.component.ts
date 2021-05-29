import { Component, OnInit } from '@angular/core';
import { animalType } from 'src/app/models/animalType';
import { AnimalTypeService } from 'src/app/services/animal-type.service';

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.css']
})
export class AnimalTypeComponent implements OnInit {
  
  animalTypes:animalType[]=[];
  currentAnimalType:animalType;
  constructor(private animalTypeService:AnimalTypeService) { }

  ngOnInit(): void {
    this.getAnimalTypes();
  }
  getAnimalTypes(){
    this.animalTypeService.getAnimalTypes().subscribe(response=>{
      this.animalTypes = response.data
    })
  }
  setCurrentAnimalType(animalType:animalType){
    this.currentAnimalType = animalType;
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
       if(!this.currentAnimalType){
         return "list-group-item active"
       }
       else{  
         return "list-group-item "
       }
      
  }
}
