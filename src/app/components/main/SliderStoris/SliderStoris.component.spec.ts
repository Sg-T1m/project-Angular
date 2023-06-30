/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderStorisComponent } from './SliderStoris.component';

describe('SliderStorisComponent', () => {
  let component: SliderStorisComponent;
  let fixture: ComponentFixture<SliderStorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderStorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderStorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
