import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {finalize, take, tap} from 'rxjs';
import {TornilloTableColumnDef} from 'src/app/services/tornillos.service';
import {TornillosActions} from 'src/app/stores/tornillos/tornillos.actions';
import {selectColumnOrder} from 'src/app/stores/tornillos/tornillos.selectors';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent implements OnInit {

  columnOrder$ = this.store.select(selectColumnOrder);
  currentColumnOrder: Map<number, TornilloTableColumnDef> = new Map();
  isLoading = false;

  constructor(private store: Store, public dialogRef: MatDialogRef<ConfigTableComponent>) {
  }

  ngOnInit(): void {
    this.columnOrder$.pipe(take(1), tap(() => this.isLoading = true), finalize(() => this.isLoading = false)).subscribe((columnOrder) => {
      columnOrder.forEach((column, index) => {
        this.currentColumnOrder.set(index, column)
      })
    })
  }

  drop(previousIndex: number, currentIndex: number) {
    const auxColumnPrev = this.currentColumnOrder.get(previousIndex);
    const auxColumnCurrent = this.currentColumnOrder.get(currentIndex);

    if (auxColumnCurrent && auxColumnPrev) {
      this.currentColumnOrder.set(previousIndex, auxColumnCurrent);
      this.currentColumnOrder.set(currentIndex, auxColumnPrev);
    }
  }

  submit() {
    this.store.dispatch(TornillosActions.changeColumnOrder({columnOrder: [...this.currentColumnOrder.values()]}));
    this.close();
  }

  close() {
    this.dialogRef?.close()
  }

  get currentColumnOrderList() {
    return [...this.currentColumnOrder.values()];
  }
}
