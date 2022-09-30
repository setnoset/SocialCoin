import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoinComponent } from './scoin.component';

describe('ScoinComponent', () => {
  let component: ScoinComponent;
  let fixture: ComponentFixture<ScoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
