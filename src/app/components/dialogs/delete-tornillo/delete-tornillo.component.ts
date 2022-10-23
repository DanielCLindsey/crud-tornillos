import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Tornillo } from 'src/app/services/tornillos.service';
import { deleteTornillo } from 'src/app/stores/tornillos/tornillos.actions';

@Component({
  selector: 'app-delete-tornillo',
  templateUrl: './delete-tornillo.component.html',
  styleUrls: ['./delete-tornillo.component.scss']
})
export class DeleteTornilloComponent {

  constructor(@Optional() public dialogRef: MatDialogRef<DeleteTornilloComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: Tornillo, private store: Store) { }

  delete() {
    this.store.dispatch(deleteTornillo({ tornillo: this.data }));
    this.close();
  }

  close() {
    this.dialogRef?.close();
  }
}
