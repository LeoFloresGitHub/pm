import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSalidaComponent } from './nueva-salida.component';

describe('NuevaSalidaComponent', () => {
  let component: NuevaSalidaComponent;
  let fixture: ComponentFixture<NuevaSalidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaSalidaComponent]
    });
    fixture = TestBed.createComponent(NuevaSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
