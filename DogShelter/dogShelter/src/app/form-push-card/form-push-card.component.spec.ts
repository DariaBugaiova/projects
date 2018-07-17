import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPushCardComponent } from './form-push-card.component';

describe('FormPushCardComponent', () => {
  let component: FormPushCardComponent;
  let fixture: ComponentFixture<FormPushCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPushCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPushCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
