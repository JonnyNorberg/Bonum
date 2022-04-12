import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BritishComponent } from './british.component';

describe('BritishComponent', () => {
  let component: BritishComponent;
  let fixture: ComponentFixture<BritishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BritishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BritishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
