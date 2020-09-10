import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCustomerFoamComponent } from './master-customer-foam.component';

describe('MasterCustomerFoamComponent', () => {
  let component: MasterCustomerFoamComponent;
  let fixture: ComponentFixture<MasterCustomerFoamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCustomerFoamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCustomerFoamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
