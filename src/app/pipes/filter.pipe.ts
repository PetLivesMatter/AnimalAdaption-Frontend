import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../models/animal';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Animal[], filterText: string): Animal[] {
    filterText = filterText?filterText.toLocaleLowerCase():"n"
    return filterText?value.filter((a:Animal)=>a.animalName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
