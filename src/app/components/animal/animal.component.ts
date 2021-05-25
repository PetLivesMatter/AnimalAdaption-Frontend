import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Animal} from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  Animals:Animal[]=[];
  dataLoaded=false;
  constructor(private animalService:AnimalService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["animalTypeId"]){
        this.getAnimalsByAnimalType(params["animalTypeId"])
      }else{
        this.getAnimals
      }
    })  
    console.log("init çalıştı");
  }
    getAnimals(){
        this.animalService.getAnimals().subscribe(response=>{
        this.Animals = response.data
        this.dataLoaded=true;
        })
    }
    getAnimalsByAnimalType(animalTypeId:number){
      this.animalService.getAnimalsByAnimalType(animalTypeId).subscribe(response=>{
      this.Animals = response.data
      this.dataLoaded=true;
      })
  }
}
