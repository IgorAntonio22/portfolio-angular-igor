import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicioan3Component } from './exercicioan3.component';

describe('Exercicioan3Component', () => {
  let component: Exercicioan3Component;
  let fixture: ComponentFixture<Exercicioan3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicioan3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicioan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
