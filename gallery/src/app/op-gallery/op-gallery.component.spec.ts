import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpGalleryComponent } from './op-gallery.component';

describe('OpGalleryComponent', () => {
  let component: OpGalleryComponent;
  let fixture: ComponentFixture<OpGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
