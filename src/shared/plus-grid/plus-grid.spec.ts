import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusGrid } from './plus-grid';

describe('PlusGrid', () => {
  let component: PlusGrid;
  let fixture: ComponentFixture<PlusGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
