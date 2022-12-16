import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVisitorLogComponent } from './search-visitor-log.component';

describe('SearchVisitorLogComponent', () => {
  let component: SearchVisitorLogComponent;
  let fixture: ComponentFixture<SearchVisitorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVisitorLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchVisitorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
