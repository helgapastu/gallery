import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-op-photo-viewer',
  templateUrl: './op-photo-viewer.component.html',
  styleUrls: ['./op-photo-viewer.component.scss']
})
export class OpPhotoViewerComponent implements OnInit {
  photo: any;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.photo = this.galleryService.getById(params.id)
    })
  }

  back() {
    this.router.navigate(['/'])
  }

  next() {
    const nextPhoto = this.galleryService.goToNextPhoto(this.photo.id)
    this.router.navigate(['photo/', nextPhoto.id])
  }

  previous() {
    const previousPhoto = this.galleryService.goToPreviousPhoto(this.photo.id)
    this.router.navigate(['photo/', previousPhoto.id])
  }

}
