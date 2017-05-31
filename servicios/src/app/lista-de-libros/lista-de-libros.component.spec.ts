import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeLibrosComponent } from './lista-de-libros.component';

describe('ListaDeLibrosComponent', () => {
  let component: ListaDeLibrosComponent;
  let fixture: ComponentFixture<ListaDeLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
