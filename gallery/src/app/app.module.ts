import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OpGalleryComponent } from './op-gallery/op-gallery.component';
import { OpPhotoComponent } from './op-gallery/op-photo/op-photo.component';
import { OpPhotoViewerComponent } from './op-gallery/op-photo-viewer/op-photo-viewer.component';
import { PhotoStyleDirective } from './op-gallery/op-photo/photo-style.directive';
import { PhotoSearchPipe } from './op-gallery/photo-search.pipe';
import { PhotoSortPipe } from './op-gallery/photo-sort.pipe'


@NgModule({
  declarations: [
    AppComponent,
    OpGalleryComponent,
    OpPhotoComponent,
    OpPhotoViewerComponent,
    PhotoStyleDirective,
    PhotoSearchPipe,
    PhotoSortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
