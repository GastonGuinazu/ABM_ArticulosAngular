import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloBajaComponent } from './articulo-baja.component';

describe('ArticuloBajaComponent', () => {
  let component: ArticuloBajaComponent;
  let fixture: ComponentFixture<ArticuloBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloBajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
