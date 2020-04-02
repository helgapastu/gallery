import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photoSort'
})
export class PhotoSortPipe implements PipeTransform {
  transform(photos: any, search = ''): any {
    if (search === 'default') {
      return photos;
    }

    else if (search === 'az') {
      return [...photos].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
    }

    else if (search === 'za') {
      return [...photos].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1).reverse();
    }
  }
}
