import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { TornilloTableColumnDef } from 'src/app/services/tornillos.service';
import { TornillosActions } from 'src/app/stores/tornillos/tornillos.actions';
import { selectColumnOrder } from 'src/app/stores/tornillos/tornillos.selectors';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent implements OnInit {

  columnOrder$ = this.store.select(selectColumnOrder);
  currentColumnOrder: Map<number, TornilloTableColumnDef> = new Map();

  constructor(private store: Store, @Optional() public dialogRef: MatDialogRef<ConfigTableComponent>) { }

  ngOnInit(): void {
    this.columnOrder$.pipe(take(1)).subscribe((columnOrder) => {
      columnOrder.forEach((column, index) => {
        this.currentColumnOrder.set(index, column)
      })
    })
  }

  drop(event: CdkDragDrop<TornilloTableColumnDef[]>) {
    const auxColumnPrev = this.currentColumnOrder.get(event.previousIndex);
    const auxColumnCurrent = this.currentColumnOrder.get(event.currentIndex);

    if(auxColumnCurrent && auxColumnPrev) {
      this.currentColumnOrder.set(event.previousIndex, auxColumnCurrent);
      this.currentColumnOrder.set(event.currentIndex, auxColumnPrev);
    }
  }

  submit() {
    this.store.dispatch(TornillosActions.changeColumnOrder({ columnOrder: [...this.currentColumnOrder.values()] }));
    this.close();
  }

  close() {
    this.dialogRef?.close()
  }
}
