import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosANComponent } from './exercicios-an.component';

describe('ExerciciosANComponent', () => {
  let component: ExerciciosANComponent;
  let fixture: ComponentFixture<ExerciciosANComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosANComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciciosANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
