import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoinGraphComponent } from './scoin-graph.component';

describe('ScoinGraphComponent', () => {
  let component: ScoinGraphComponent;
  let fixture: ComponentFixture<ScoinGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoinGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoinGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
