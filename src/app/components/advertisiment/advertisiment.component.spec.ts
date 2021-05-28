import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisimentComponent } from './advertisiment.component';

describe('AdvertisimentComponent', () => {
  let component: AdvertisimentComponent;
  let fixture: ComponentFixture<AdvertisimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
