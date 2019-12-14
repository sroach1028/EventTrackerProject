import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtinctionComponent } from './extinction.component';

describe('ExtinctionComponent', () => {
  let component: ExtinctionComponent;
  let fixture: ComponentFixture<ExtinctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtinctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtinctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
