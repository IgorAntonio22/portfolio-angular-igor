import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicioan4Component } from './exercicioan4.component';

describe('Exercicioan4Component', () => {
  let component: Exercicioan4Component;
  let fixture: ComponentFixture<Exercicioan4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicioan4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicioan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
