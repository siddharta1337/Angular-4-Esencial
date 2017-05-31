import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoComponent } from './saludo.component';

describe('SaludoComponent', () => {
  let component: SaludoComponent;
  let fixture: ComponentFixture<SaludoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
