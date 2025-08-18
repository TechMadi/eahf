import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSchedule } from './book-schedule';

describe('BookSchedule', () => {
  let component: BookSchedule;
  let fixture: ComponentFixture<BookSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
