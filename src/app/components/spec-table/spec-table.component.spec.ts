import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecTableComponent } from './spec-table.component';

describe('SpecTableComponent', () => {
  let component: SpecTableComponent;
  let fixture: ComponentFixture<SpecTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
