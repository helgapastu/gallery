import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpGalleryComponent } from './op-gallery/op-gallery.component';
import { OpPhotoViewerComponent } from './op-gallery/op-photo-viewer/op-photo-viewer.component';


const routes: Routes = [
  { path: '', component: OpGalleryComponent },
  { path: 'photo/:id', component: OpPhotoViewerComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
