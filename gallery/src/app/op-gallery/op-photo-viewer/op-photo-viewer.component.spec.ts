import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpPhotoViewerComponent } from './op-photo-viewer.component';

describe('OpPhotoViewerComponent', () => {
  let component: OpPhotoViewerComponent;
  let fixture: ComponentFixture<OpPhotoViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpPhotoViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpPhotoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
