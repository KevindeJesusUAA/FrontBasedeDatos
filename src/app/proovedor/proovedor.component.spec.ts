import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProovedorComponent } from './proovedor.component';

describe('ProovedorComponent', () => {
  let component: ProovedorComponent;
  let fixture: ComponentFixture<ProovedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProovedorComponent]
    });
    fixture = TestBed.createComponent(ProovedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
