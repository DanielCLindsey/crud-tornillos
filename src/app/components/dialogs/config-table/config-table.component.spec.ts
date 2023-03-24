import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

import {ConfigTableComponent} from './config-table.component';
import {TornilloTableColumnDef} from "../../../services/tornillos.service";
import {selectColumnOrder} from "../../../stores/tornillos/tornillos.selectors";
import {MatDialogRef} from "@angular/material/dialog";

describe('ConfigTableComponent', () => {
  let component: ConfigTableComponent;
  let fixture: ComponentFixture<ConfigTableComponent>;
  let store: MockStore;

  const mockColumnOrder: TornilloTableColumnDef[] = [
    {
      columnDef: 'mock',
      header: 'mock',
      cell: () => `mock`,
    },
    {
      columnDef: 'mock1',
      header: 'mock1',
      cell: () => `mock1`,
    }]

  afterEach(() => {
    store?.resetSelectors();
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigTableComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: () => true
          }
        },
        provideMockStore({
          selectors: [
            {
              selector: selectColumnOrder,
              value: [
                {
                  columnOrder: mockColumnOrder
                }
              ]
            }
          ]
        })
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

  it('should load column data', (done) => {
    store.select(selectColumnOrder).subscribe((columnOrder) => {
      expect(component.currentColumnOrder.get(0)).toEqual(columnOrder[0])
      done();
    })
  })

  it('should drag and drop updating values', () => {
    component.currentColumnOrder.set(0, mockColumnOrder[0])
    component.currentColumnOrder.set(1, mockColumnOrder[1])
    component.drop(0, 1);

    expect(component.currentColumnOrder.get(0)?.columnDef).toEqual(mockColumnOrder[1].columnDef)
  })

  it('should close', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough()
    component.close();
    expect(spy).toHaveBeenCalled();
  })

  it('should submit', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough()
    component.submit();
    expect(spy).toHaveBeenCalled();
  })
});
