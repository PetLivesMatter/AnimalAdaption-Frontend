import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Animal } from '../models/animal';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  apiUrl=""; //link ekle
  constructor(private httpClient: HttpClient) { }
  getAnimals():Observable<ListResponseModel<Animal>> {
    let newPath = this.apiUrl+"animals/getall"
    return this.httpClient.get<ListResponseModel<Animal>>(newPath);
      }
  getAnimalsByAnimalType(animalTypeId:number):Observable<ListResponseModel<Animal>> {
    let newPath = this.apiUrl+"animals/getbyyanimaltype?animalTypeId="+animalTypeId
    return this.httpClient.get<ListResponseModel<Animal>>(newPath);
      }      
}
