import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Animal } from '../models/animal';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  apiUrl = 'https://localhost:44335/api/'; //link ekle
  constructor(private httpClient: HttpClient) {}
  
  getAnimals(): Observable<ListResponseModel<Animal>> {
    let newPath = this.apiUrl + 'animals/getall';
    return this.httpClient.get<ListResponseModel<Animal>>(newPath);
  }
  getAnimalById(
    animalId: number
  ): Observable<SingleResponseModel<Animal>> {
    let newPath =
      this.apiUrl + 'animals/getbyid' + animalId; //BURAYI DÜZENLEME İHTİMAL VAR
    return this.httpClient.get<SingleResponseModel<Animal>>(newPath);
  }

  
  addAnimal(animal: Animal): Observable<SingleResponseModel<Animal>> {
    
    
    return this.httpClient.post<SingleResponseModel<Animal>>(
      this.apiUrl + 'animals/add',   
      animal
    );
  }
  deleteAnimal(animal:Animal):Observable<SingleResponseModel<Animal>>{
    return this.httpClient.post<SingleResponseModel<Animal>>(
      this.apiUrl + 'animals/deletebyid',  
      animal
    );
  }
  updateAnimal(animal:Animal):Observable<SingleResponseModel<Animal>>{
    return this.httpClient.patch<SingleResponseModel<Animal>>(
      this.apiUrl+'animals/update',animal
    )
  }
  getAnimalsByAnimalType(
    animalTypeId: number
  ): Observable<ListResponseModel<Animal>> {
    let newPath =
      this.apiUrl + 'animaltypes/getbyid?id='+animalTypeId;
    return this.httpClient.get<ListResponseModel<Animal>>(newPath);
  }
  getAllByAnimalTypesId(animalTypeId:number):Observable<ListResponseModel<Animal>>{
    let newPath= this.apiUrl+'animals/getallbyanimaltypesid?id='+animalTypeId;
    return this.httpClient.get<ListResponseModel<Animal>>(newPath);
  }


}
