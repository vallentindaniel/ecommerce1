import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFilterProductsComponent } from './tab-filter-products.component';

describe('TabFilterProductsComponent', () => {
  let component: TabFilterProductsComponent;
  let fixture: ComponentFixture<TabFilterProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFilterProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFilterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
