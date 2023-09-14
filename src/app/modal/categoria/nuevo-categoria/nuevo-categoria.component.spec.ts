import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCategoriaComponent } from './nuevo-categoria.component';

describe('NuevoCategoriaComponent', () => {
  let component: NuevoCategoriaComponent;
  let fixture: ComponentFixture<NuevoCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoCategoriaComponent]
    });
    fixture = TestBed.createComponent(NuevoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
