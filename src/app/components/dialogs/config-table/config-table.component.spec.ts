import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/stores/tornillos/tornillos.reducers';
import { TornillosState } from 'src/app/stores/tornillos/tornillos.state';

import { ConfigTableComponent } from './config-table.component';

describe('ConfigTableComponent', () => {
  let component: ConfigTableComponent;
  let fixture: ComponentFixture<ConfigTableComponent>;
  let store: MockStore<TornillosState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigTableComponent ],
      providers: [
        provideMockStore<TornillosState>({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ConfigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
