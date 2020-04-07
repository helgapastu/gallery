import { Pipe, PipeTransform } from '@angular/core';
import { GalleryService } from './gallery.service';

@Pipe({
  name: 'photoSearch'
})
export class PhotoSearchPipe implements PipeTransform {
constructor(private galleryService: GalleryService) {}

  transform(photos: any, search = ''): any {
    
    if (!search.trim()) {
      this.galleryService.currentVisiblePhotos = photos;
      
      return photos;

    } else {
      const searchedPhotos = photos.filter(photoObj => {
        return photoObj.title.toLowerCase().includes(search.toLowerCase())
      });
      this.galleryService.currentVisiblePhotos = searchedPhotos;

      return searchedPhotos;
    }
  }

}
