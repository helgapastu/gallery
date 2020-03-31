import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpPhotoComponent } from './op-photo.component';

describe('OpPhotoComponent', () => {
  let component: OpPhotoComponent;
  let fixture: ComponentFixture<OpPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
