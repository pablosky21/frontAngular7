import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCampoComponent } from './tipo-campo.component';

describe('TipoCampoComponent', () => {
  let component: TipoCampoComponent;
  let fixture: ComponentFixture<TipoCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
