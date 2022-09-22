import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosAltaComponent } from './articulos-alta.component';

describe('ArticulosAltaComponent', () => {
  let component: ArticulosAltaComponent;
  let fixture: ComponentFixture<ArticulosAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
