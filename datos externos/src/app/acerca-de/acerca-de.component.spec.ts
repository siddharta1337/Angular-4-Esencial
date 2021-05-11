import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeComponent } from './acerca-de.component';

describe('AcercaDeComponent', () => {
  let component: AcercaDeComponent;
  let fixture: ComponentFixture<AcercaDeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaDeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
