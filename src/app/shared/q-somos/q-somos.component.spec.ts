import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QSomosComponent } from './q-somos.component';

describe('QSomosComponent', () => {
  let component: QSomosComponent;
  let fixture: ComponentFixture<QSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QSomosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
