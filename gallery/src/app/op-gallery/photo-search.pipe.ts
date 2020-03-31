import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photoSearch'
})
export class PhotoSearchPipe implements PipeTransform {
  transform(photos: any, search = ''): any {
    
    if (!search.trim()) {
      return photos
    } else {
      return photos.filter(photoObj => {
        return photoObj.title.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
