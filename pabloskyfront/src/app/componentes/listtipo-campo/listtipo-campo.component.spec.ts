import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtipoCampoComponent } from './listtipo-campo.component';

describe('ListtipoCampoComponent', () => {
  let component: ListtipoCampoComponent;
  let fixture: ComponentFixture<ListtipoCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtipoCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtipoCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
