import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingMapComponent } from './routing-map.component';

describe('RoutingMapComponent', () => {
  let component: RoutingMapComponent;
  let fixture: ComponentFixture<RoutingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
