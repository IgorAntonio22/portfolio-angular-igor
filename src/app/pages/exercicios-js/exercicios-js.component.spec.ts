import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosJSComponent } from './exercicios-js.component';

describe('ExerciciosJSComponent', () => {
  let component: ExerciciosJSComponent;
  let fixture: ComponentFixture<ExerciciosJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciciosJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
