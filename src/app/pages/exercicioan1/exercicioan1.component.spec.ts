import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicioan1Component } from './exercicioan1.component';

describe('Exercicioan1Component', () => {
  let component: Exercicioan1Component;
  let fixture: ComponentFixture<Exercicioan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicioan1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicioan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
