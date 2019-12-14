import { Pipe, PipeTransform } from '@angular/core';
import { Extinction } from '../models/extinction';

@Pipe({
  name: 'searchClass'
})
export class SearchClassPipe implements PipeTransform {

  transform(extinctions: Extinction[], animClass: string): Extinction[] {
    const results = [];
    extinctions.forEach((ext) => {
      if (ext.animalClass === animClass){
        results.push(ext);
      }
    });
    return results;
  }

}
