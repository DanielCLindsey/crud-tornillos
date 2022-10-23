import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-tornillo',
  templateUrl: './create-tornillo.component.html',
  styleUrls: ['./create-tornillo.component.scss']
})
export class CreateTornilloComponent {

  constructor(public dialogRef: MatDialogRef<CreateTornilloComponent>) {}

}
