import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiosformComponent } from './cambiosform.component';

describe('CambiosformComponent', () => {
  let component: CambiosformComponent;
  let fixture: ComponentFixture<CambiosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiosformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
