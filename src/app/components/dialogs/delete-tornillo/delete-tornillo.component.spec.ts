import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTornilloComponent } from './delete-tornillo.component';

describe('DeleteTornilloComponent', () => {
  let component: DeleteTornilloComponent;
  let fixture: ComponentFixture<DeleteTornilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTornilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
