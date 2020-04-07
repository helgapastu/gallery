import { Pipe, PipeTransform } from '@angular/core';
import { GalleryService } from './gallery.service';

@Pipe({
  name: 'photoSort'
})
export class PhotoSortPipe implements PipeTransform {

constructor(private galleryServise: GalleryService) {}

  transform(photos: any, search = ''): any {
    if (search === 'default') {
      this.galleryServise.currentVisiblePhotos = photos;

      return photos;
    }

    else if (search === 'ASC') {
      const sortedPhotos = [...photos].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      
      this.galleryServise.currentVisiblePhotos = sortedPhotos;
     
      return sortedPhotos;
    }

    else if (search === 'DESC') {
      const sortedPhotos = [...photos].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1).reverse();
      
      this.galleryServise.currentVisiblePhotos = sortedPhotos;
     
      return sortedPhotos;
    }
  }
}
