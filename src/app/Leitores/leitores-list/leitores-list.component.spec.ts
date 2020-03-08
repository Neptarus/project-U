import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitoresListComponent } from './leitores-list.component';

describe('leitoresListComponent', () => {
  let component: LeitoresListComponent;
  let fixture: ComponentFixture<LeitoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
