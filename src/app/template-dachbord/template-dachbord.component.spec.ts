import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDachbordComponent } from './template-dachbord.component';

describe('TemplateDachbordComponent', () => {
  let component: TemplateDachbordComponent;
  let fixture: ComponentFixture<TemplateDachbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDachbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDachbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
