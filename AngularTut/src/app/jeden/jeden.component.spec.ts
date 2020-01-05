import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JedenComponent } from './jeden.component';

describe('JedenComponent', () => {
  let component: JedenComponent;
  let fixture: ComponentFixture<JedenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JedenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JedenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
