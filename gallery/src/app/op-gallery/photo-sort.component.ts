import { Component, Input, Output, EventEmitter } from "@angular/core";
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-photo-sort',
  template: `<select (change)="selectOption($event.target.value)" [(ngModel)]="selectedOption">
                <option *ngFor="let option of options" [value]="option.value">{{option.name}}</option>
              </select>`
})

export class PhotoSortComponent {
  options = [
    { name: 'Не сортовано', value: 'default' },
    { name: 'A-Я', value: 'az' },
    { name: 'Я-A', value: 'za' }
  ];

  selectedOption: string;
  @Output() changedOption = new EventEmitter()

  constructor(private galleryService: GalleryService) {

  }

  ngOnInit() {
    this.selectOption(this.galleryService.sortType);
  }

  selectOption(value: string) {
    this.selectedOption = value;
    this.changedOption.emit(this.selectedOption)
  }

}