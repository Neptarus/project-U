import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresListComponent } from './autores-list.component';

describe('AutoresListComponent', () => {
  let component: AutoresListComponent;
  let fixture: ComponentFixture<AutoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
