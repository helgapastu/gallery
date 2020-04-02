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

  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit() {
    this.photos = this.galleryService.getCachedResults();
  }

  search(searchText) {
    if (searchText.trim()) {
      this.galleryService.getPhotos(searchText).subscribe(response => {
        this.photos = response;
      });
    }
  }

  displayChange(option) {
    this.selectedOption = option;
    this.galleryService.sortType = option;
  }

  goBack() {
    this.galleryService.sortType = 'default';
    this.photos.length = 0;
  }
}
