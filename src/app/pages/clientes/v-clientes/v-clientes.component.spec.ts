import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VClientesComponent } from './v-clientes.component';

describe('VClientesComponent', () => {
  let component: VClientesComponent;
  let fixture: ComponentFixture<VClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
