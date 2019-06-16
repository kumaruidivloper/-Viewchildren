import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcDemo1Component } from './vc-demo1.component';

describe('VcDemo1Component', () => {
  let component: VcDemo1Component;
  let fixture: ComponentFixture<VcDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
