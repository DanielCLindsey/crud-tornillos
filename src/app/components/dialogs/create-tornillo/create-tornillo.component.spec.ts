import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/stores/tornillos/tornillos.reducers';
import { TornillosState } from 'src/app/stores/tornillos/tornillos.state';

import { CreateTornilloComponent } from './create-tornillo.component';

describe('CreateTornilloComponent', () => {
  let component: CreateTornilloComponent;
  let fixture: ComponentFixture<CreateTornilloComponent>;
  let store: MockStore<TornillosState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTornilloComponent ],
      providers: [
        provideMockStore<TornillosState>({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CreateTornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close', () => {
    component.close();
  });

  it('should submit', () => {
    component.submit();
  });

  it('should not decrease number if number is 0', () => {
    component.decreaseNumber('price');

    expect(component.createTornillo.get('price')?.value).toEqual(0);
  })

  it('should decrease number if number is greater than 0', () => {
    component.createTornillo.get('price')?.setValue(1);
    component.decreaseNumber('price');

    expect(component.createTornillo.get('price')?.value).toEqual(0.9);
  })

  it('should increase number by 0.1', () => {
    component.increaseNumber('price');

    expect(component.createTornillo.get('price')?.value).toEqual(0.1);
  })
});
