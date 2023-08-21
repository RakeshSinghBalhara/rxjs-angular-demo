import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponentComponent } from './item-list-component.component';

describe('ItemListComponentComponent', () => {
  let component: ItemListComponentComponent;
  let fixture: ComponentFixture<ItemListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListComponentComponent]
    });
    fixture = TestBed.createComponent(ItemListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
