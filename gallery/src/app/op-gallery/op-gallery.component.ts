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
  inputTitle: string;

  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit() {
    this.inputTitle = this.galleryService.getSearchingValue();
    this.photos = this.galleryService.getCachedResults();
  }

  searchInNgTemplate(searchText) {
    if (searchText.trim()) {
      this.galleryService.getPhotos(searchText).subscribe(response => {
        this.photos = response;
      });
    }
  }

  setInputTitle(value) {
    this.inputTitle = value;
    this.galleryService.setSearchingValue(value);
  }

  setSelectedOption(option) {
    this.selectedOption = option;
    this.galleryService.setSortingType(option);
  }

  goToNgTemplate() {
    this.galleryService.setSortingType(this.galleryService.DEFAULT_SORTING_STATE);
    this.inputTitle = this.galleryService.DEFAULT_SEARCHING_VALUE;
    this.photos.length = 0;
  }
}
