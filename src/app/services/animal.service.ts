import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Animal } from '../models/animal';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  apiUrl="https://localhost:44391/api/"; //link ekle
  constructor(private httpClient: HttpClient) { }
  getAnimals():Observable<ListResponseModel<Animal>> {
    let newPath = this.apiUrl+"animals/getall"
    return this.httpClient.get<ListResponseModel<Animal>>(newPath);
      }
  getAnimalsByAnimalType(animalTypeId:number):Observable<ListResponseModel<Animal>> {
    let newPath = this.apiUrl+"animals/getbyanimaltype?animalTypeId="+animalTypeId
    return this.httpClient.get<ListResponseModel<Animal>>(newPath);
      }
      add(animal:Animal):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"animal/add",animal)
      }           

}
