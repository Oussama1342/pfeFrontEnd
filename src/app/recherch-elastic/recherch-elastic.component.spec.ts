import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchElasticComponent } from './recherch-elastic.component';

describe('RecherchElasticComponent', () => {
  let component: RecherchElasticComponent;
  let fixture: ComponentFixture<RecherchElasticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchElasticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchElasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
