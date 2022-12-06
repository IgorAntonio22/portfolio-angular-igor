import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projeto01Component } from './projeto01.component';

describe('Projeto01Component', () => {
  let component: Projeto01Component;
  let fixture: ComponentFixture<Projeto01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projeto01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projeto01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
