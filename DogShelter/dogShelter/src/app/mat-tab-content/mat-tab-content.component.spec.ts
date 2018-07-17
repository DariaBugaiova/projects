import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTabContentComponent } from './mat-tab-content.component';

describe('MatTabContentComponent', () => {
  let component: MatTabContentComponent;
  let fixture: ComponentFixture<MatTabContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTabContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
