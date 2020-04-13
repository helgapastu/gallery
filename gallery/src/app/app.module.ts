import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatFormFieldModule, 
  MatSelectModule, 
  MatInputModule, 
  MatButtonModule, 
  MatButtonToggleModule, 
  MatCardModule,
 } from '@angular/material';

import { AppComponent } from './app.component';
import { OpGalleryComponent } from './op-gallery/op-gallery.component';
import { OpPhotoComponent } from './op-gallery/op-photo/op-photo.component';
import { OpPhotoViewerComponent } from './op-gallery/op-photo-viewer/op-photo-viewer.component';
import { PhotoStyleDirective } from './op-gallery/op-photo/photo-style.directive';
import { PhotoSearchPipe } from './op-gallery/photo-search.pipe';
import { PhotoSortPipe } from './op-gallery/photo-sort.pipe'
import { PhotoSortComponent } from './op-gallery/photo-sort.component';



@NgModule({
  declarations: [
    AppComponent,
    OpGalleryComponent,
    OpPhotoComponent,
    OpPhotoViewerComponent,
    PhotoSortComponent,
    PhotoStyleDirective,
    PhotoSearchPipe,
    PhotoSortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
