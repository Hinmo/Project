import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AClientesComponent } from './a-clientes.component';

describe('AClientesComponent', () => {
  let component: AClientesComponent;
  let fixture: ComponentFixture<AClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
