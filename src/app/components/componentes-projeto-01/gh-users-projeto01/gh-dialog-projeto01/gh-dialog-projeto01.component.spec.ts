import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhDialogProjeto01Component } from './gh-dialog-projeto01.component';

describe('GhDialogProjeto01Component', () => {
  let component: GhDialogProjeto01Component;
  let fixture: ComponentFixture<GhDialogProjeto01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhDialogProjeto01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhDialogProjeto01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
