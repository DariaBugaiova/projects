import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(dogList, value) {
    // console.log(dogList);
    if ( value === '' || value == null) {
      return dogList;
    } else {
    return dogList.filter(searchDog => {
      return (searchDog.breed.includes(value)) ||
        (searchDog.age.includes(value)) ||
        (searchDog.character_feature.includes(value));
    });
  }
  }
}
