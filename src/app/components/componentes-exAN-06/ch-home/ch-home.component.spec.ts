import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChHomeComponent } from './ch-home.component';

describe('ChHomeComponent', () => {
  let component: ChHomeComponent;
  let fixture: ComponentFixture<ChHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
