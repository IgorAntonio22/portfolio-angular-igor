import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicioan6Component } from './exercicioan6.component';

describe('Exercicioan6Component', () => {
  let component: Exercicioan6Component;
  let fixture: ComponentFixture<Exercicioan6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicioan6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicioan6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
