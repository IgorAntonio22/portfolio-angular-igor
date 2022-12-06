import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicioan5Component } from './exercicioan5.component';

describe('Exercicioan5Component', () => {
  let component: Exercicioan5Component;
  let fixture: ComponentFixture<Exercicioan5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicioan5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicioan5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
