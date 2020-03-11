import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubCategotyComponent } from './view-sub-categoty.component';

describe('ViewSubCategotyComponent', () => {
  let component: ViewSubCategotyComponent;
  let fixture: ComponentFixture<ViewSubCategotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubCategotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubCategotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
