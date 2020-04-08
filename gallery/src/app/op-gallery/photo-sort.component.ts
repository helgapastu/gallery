import { Component, Output, EventEmitter } from "@angular/core";
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-photo-sort',
  template: `<select (change)="selectOption($event.target.value)" [(ngModel)]="selectedOption">
                <option *ngFor="let option of options" [value]="option.value">{{option.name}}</option>
              </select>`
})

export class PhotoSortComponent {
  options = [
    { name: 'Not sorted', value: 'default' },
    { name: 'A-Z', value: 'ASC' },
    { name: 'Z-A', value: 'DESC' }
  ];

  selectedOption: string;
  @Output() changedOption = new EventEmitter()

  constructor(private galleryService: GalleryService) {

  }

  ngOnInit() {
    this.selectOption(this.galleryService.getSortingType());
  }

  selectOption(value: string) {
    this.selectedOption = value;
    this.changedOption.emit(this.selectedOption)
  }

}