import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{Animal} from 'src/app/models/animal';
import { AnimalTypeService } from 'src/app/services/animal-type.service';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  Animals:Animal[]=[];
  addAnimalForm:FormGroup;
  animalTypes = new Map<number, string>()

  dataLoaded=false;
  filterText="";
  constructor(private animalService:AnimalService,
    private animalTypeService:AnimalTypeService, 
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["animalTypeId"]){
        this.getAllByAnimalTypesId(params["animalTypeId"])
      }else{
        this.getAnimals()
      }
    })    
    this.setAnimalsTypesMap();
  }

  setAnimalsTypesMap() {
    this.animalTypeService.getAnimalTypes().subscribe(res => {
      console.log(res.data);
      res.data.forEach((animalType) => {
        this.animalTypes.set(animalType.animalTypeId, animalType.animalTypeName);
      })
      
      
    })
  }

    getAnimals(){
        this.animalService.getAnimals().subscribe(response=>{
        this.Animals = response.data
        this.dataLoaded=true;
        console.log(this.Animals)
        
        })
    }
    getAnimalsByAnimalType(animalTypeId:number){
      this.animalService.getAnimalsByAnimalType(animalTypeId).subscribe(response=>{
        console.log(response.data);
        
      this.Animals = response.data
      this.dataLoaded=true;
      })
    }
    addAnimal(animal:Animal){
      this.animalService.addAnimal(animal)
    }
    createAddAnimalForm(){
      this.addAnimalForm=this.formBuilder.group({
        animalTypesId:["",Validators.required],
        animalName:["",Validators.required],
        animalWeight:["",Validators.required],
        animalGender:["",Validators.required],
        animalAge:["",Validators.required],
        Address:["",Validators.required]
      })
    }
    getAnimalTypeById(animalTypeId:number):string{
      let name =""
     this.animalTypeService.getAnimalTypeById(animalTypeId).subscribe((data)=>{
      name =data.data.animalTypeName
      })
      return name
    }
    rotatingAdvertisiment(){

      this.router.navigate(["pets/add"])
    }
    getAllByAnimalTypesId(animalTypeId:number){
      this.animalService.getAllByAnimalTypesId(animalTypeId).subscribe((data)=>{
        this.Animals = data.data;
        
      })
    }
}
