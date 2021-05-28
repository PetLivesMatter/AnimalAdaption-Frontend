import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{Animal} from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  Animals:Animal[]=[];
  addAnimalForm:FormGroup;
  
  dataLoaded=false;
  filterText="";
  constructor(private animalService:AnimalService, 
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["animalTypeId"]){
        this.getAnimalsByAnimalType(params["animalTypeId"])
      }else{
        this.getAnimals()
      }
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
    rotatingAdvertisiment(){

      this.router.navigate(["pets/add"])
    }
}
