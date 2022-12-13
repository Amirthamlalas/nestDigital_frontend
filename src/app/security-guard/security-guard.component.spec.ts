import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGuardComponent } from './security-guard.component';

describe('SecurityGuardComponent', () => {
  let component: SecurityGuardComponent;
  let fixture: ComponentFixture<SecurityGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
