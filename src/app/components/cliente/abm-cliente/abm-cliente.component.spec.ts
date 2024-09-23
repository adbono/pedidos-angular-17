import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmClienteComponent } from './abm-cliente.component';

describe('AbmClienteComponent', () => {
  let component: AbmClienteComponent;
  let fixture: ComponentFixture<AbmClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbmClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
