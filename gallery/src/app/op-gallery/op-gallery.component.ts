import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-op-gallery',
  templateUrl: './op-gallery.component.html',
  styleUrls: ['./op-gallery.component.scss']
})
export class OpGalleryComponent implements OnInit {
  photos: any[] = [];
  selectedOption: string;
  filterTitle: string;

  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit() {
    this.filterTitle = this.galleryService.getFilteringValue();
    this.photos = this.galleryService.getCachedResults();
  }

  searchInStartPage(searchText) {
    if (searchText.trim()) {
      this.galleryService.getPhotos(searchText).subscribe(response => {
        this.photos = response;
      });
    }
  }

  setFilterTitle(value) {
    this.filterTitle = value;
    this.galleryService.setFilteringValue(value);
  }

  setSelectedOption(option) {
    this.selectedOption = option;
    this.galleryService.setSortingType(option);
  }

  goToStartPage() {
    this.galleryService.setSortingType(this.galleryService.DEFAULT_SORTING_STATE);
    this.filterTitle = '';
    this.photos.length = 0;
  }
}
