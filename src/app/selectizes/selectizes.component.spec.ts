import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectizesComponent } from './selectizes.component';

describe('BooksComponent', () => {
  let component: SelectizesComponent;
  let fixture: ComponentFixture<SelectizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
