import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSeriesComponent } from './remove-series.component';

describe('RemoveSeriesComponent', () => {
  let component: RemoveSeriesComponent;
  let fixture: ComponentFixture<RemoveSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
