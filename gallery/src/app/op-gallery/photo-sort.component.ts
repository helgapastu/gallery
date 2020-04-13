import { Component, Output, EventEmitter } from "@angular/core";
import { GalleryService } from './gallery.service';


@Component({
  selector: 'app-photo-sort',
  template: `<mat-form-field>
              <mat-select (selectionChange)="selectOption($event)" [(ngModel)]="selectedOption">
              <mat-option *ngFor="let option of options" [value]="option.value">{{ option.name }}</mat-option>
            </mat-select>
          </mat-form-field>`
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

  selectOption(event) {
    this.selectedOption = event.value || event;
    this.changedOption.emit(this.selectedOption)
  }

}