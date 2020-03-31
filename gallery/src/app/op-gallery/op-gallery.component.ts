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
  options = [
    { name: 'Не сортовано', value: 'default' },
    { name: 'A-Я', value: 'az' },
    { name: 'Я-A', value: 'za' }
  ];
  selectedOption = 'default';

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

  selectOption(value: string) {
    this.selectedOption = value
  }
}
