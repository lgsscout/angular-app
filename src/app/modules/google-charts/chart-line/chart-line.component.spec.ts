/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChartLineComponent } from './chart-line.component';

describe('ChartLineComponent', () => {
  let component: ChartLineComponent;
  let fixture: ComponentFixture<ChartLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
