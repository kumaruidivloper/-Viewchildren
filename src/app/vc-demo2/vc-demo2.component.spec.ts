import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcDemo2Component } from './vc-demo2.component';

describe('VcDemo2Component', () => {
  let component: VcDemo2Component;
  let fixture: ComponentFixture<VcDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
