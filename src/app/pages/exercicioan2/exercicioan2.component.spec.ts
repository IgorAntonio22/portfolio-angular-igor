import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicioan2Component } from './exercicioan2.component';

describe('Exercicioan2Component', () => {
  let component: Exercicioan2Component;
  let fixture: ComponentFixture<Exercicioan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicioan2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicioan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
