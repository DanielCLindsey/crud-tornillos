import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/stores/tornillos/tornillos.reducers';
import { TornillosState } from 'src/app/stores/tornillos/tornillos.state';
import { DeleteTornilloComponent } from './delete-tornillo.component';

describe('DeleteTornilloComponent', () => {
  let component: DeleteTornilloComponent;
  let fixture: ComponentFixture<DeleteTornilloComponent>;

  let store: MockStore<TornillosState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTornilloComponent ],
      providers: [
        provideMockStore<TornillosState>({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(DeleteTornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close', () => {
    component.close();
  })

  it('should delete', () => {
    component.delete();
  })
});
