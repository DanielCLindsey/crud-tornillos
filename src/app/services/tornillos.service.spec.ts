import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { environment } from 'src/environments/environment';
import { initialState } from '../stores/tornillos/tornillos.reducers';
import { TornillosState } from '../stores/tornillos/tornillos.state';

import { TornillosService } from './tornillos.service';

describe('TornillosService', () => {
  let service: TornillosService;
  let store: MockStore<TornillosState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
      ],
      providers: [
        provideMockStore<TornillosState>({ initialState })
      ]
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(TornillosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
