import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeLogComponent } from './search-employee-log.component';

describe('SearchEmployeeLogComponent', () => {
  let component: SearchEmployeeLogComponent;
  let fixture: ComponentFixture<SearchEmployeeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEmployeeLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmployeeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
