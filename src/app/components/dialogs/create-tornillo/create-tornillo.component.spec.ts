import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTornilloComponent } from './create-tornillo.component';

describe('CreateTornilloComponent', () => {
  let component: CreateTornilloComponent;
  let fixture: ComponentFixture<CreateTornilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTornilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
