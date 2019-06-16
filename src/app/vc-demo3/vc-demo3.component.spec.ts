import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcDemo3Component } from './vc-demo3.component';

describe('VcDemo3Component', () => {
  let component: VcDemo3Component;
  let fixture: ComponentFixture<VcDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
