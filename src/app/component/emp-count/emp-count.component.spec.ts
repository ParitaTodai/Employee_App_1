import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCountComponent } from './emp-count.component';

describe('EmpCountComponent', () => {
  let component: EmpCountComponent;
  let fixture: ComponentFixture<EmpCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
