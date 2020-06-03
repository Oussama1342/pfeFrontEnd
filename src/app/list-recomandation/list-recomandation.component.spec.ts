import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecomandationComponent } from './list-recomandation.component';

describe('ListRecomandationComponent', () => {
  let component: ListRecomandationComponent;
  let fixture: ComponentFixture<ListRecomandationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecomandationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecomandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
