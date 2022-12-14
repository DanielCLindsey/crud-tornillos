import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/stores/tornillos/tornillos.reducers';
import { TornillosState } from 'src/app/stores/tornillos/tornillos.state';

import { TornillosComponent } from './tornillos.component';

describe('TornillosComponent', () => {
  let component: TornillosComponent;
  let fixture: ComponentFixture<TornillosComponent>;
  let store: MockStore<TornillosState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TornillosComponent ],
      providers: [
        provideMockStore<TornillosState>({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TornillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open create dialog', () => {
    component.createTornillo();
  })
  it('should open delete dialog', () => {
    component.deleteTornillo({ brand: '', format: '', name: '', price: 0, reference: ''});
  })
  it('should open config dialog', () => {
    component.configTable();
  })

  it('should generate range label', () => {
    component.espRangeLabel(0, 1, 1);
  })
});
