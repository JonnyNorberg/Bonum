import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NordicComponent } from './nordic.component';

describe('NordicComponent', () => {
  let component: NordicComponent;
  let fixture: ComponentFixture<NordicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NordicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NordicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
