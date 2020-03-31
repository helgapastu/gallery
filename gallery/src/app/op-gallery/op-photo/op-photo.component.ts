import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-op-photo',
  templateUrl: './op-photo.component.html',
  styleUrls: ['./op-photo.component.scss']
})
export class OpPhotoComponent implements OnInit {
  @Input() photoObj: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  displayPhoto() {
    this.router.navigate(['photo/', this.photoObj.id])
  }

}
