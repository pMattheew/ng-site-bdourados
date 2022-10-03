import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionABarbeariaComponent } from './section-a-barbearia.component';

describe('SectionABarbeariaComponent', () => {
  let component: SectionABarbeariaComponent;
  let fixture: ComponentFixture<SectionABarbeariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionABarbeariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionABarbeariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
