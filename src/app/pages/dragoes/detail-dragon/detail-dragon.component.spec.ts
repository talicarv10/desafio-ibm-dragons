import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDragonComponent } from './detail-dragon.component';

describe('DetailDragonComponent', () => {
  let component: DetailDragonComponent;
  let fixture: ComponentFixture<DetailDragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
