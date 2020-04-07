import { Pipe, PipeTransform } from '@angular/core';
import { GalleryService } from './gallery.service';

@Pipe({
  name: 'photoSearch'
})
export class PhotoSearchPipe implements PipeTransform {
constructor(private galleryService: GalleryService) {}

  transform(photos: any, filter = ''): any {
    
    if (!filter.trim()) {
      this.galleryService.currentVisiblePhotos = photos;
      
      return photos;

    } else {
      const filteredPhotos = photos.filter(photoObj => {
        return photoObj.title.toLowerCase().includes(filter.toLowerCase())
      });
      this.galleryService.currentVisiblePhotos = filteredPhotos;

      return filteredPhotos;
    }
  }

}
