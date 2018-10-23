import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMoviesComponent } from './simple-movies.component';

describe('SimpleMoviesComponent', () => {
  let component: SimpleMoviesComponent;
  let fixture: ComponentFixture<SimpleMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
