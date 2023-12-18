import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFoodStoreComponent } from './pagina-food-store.component';

describe('PaginaFoodStoreComponent', () => {
  let component: PaginaFoodStoreComponent;
  let fixture: ComponentFixture<PaginaFoodStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaFoodStoreComponent]
    });
    fixture = TestBed.createComponent(PaginaFoodStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
