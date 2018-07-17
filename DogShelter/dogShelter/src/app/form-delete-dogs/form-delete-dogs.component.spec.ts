import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteDogsComponent } from './form-delete-dogs.component';

describe('FormDeleteDogsComponent', () => {
  let component: FormDeleteDogsComponent;
  let fixture: ComponentFixture<FormDeleteDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDeleteDogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDeleteDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
