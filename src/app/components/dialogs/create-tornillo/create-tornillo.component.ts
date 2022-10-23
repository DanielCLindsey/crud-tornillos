import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-tornillo',
  templateUrl: './create-tornillo.component.html',
  styleUrls: ['./create-tornillo.component.scss']
})
export class CreateTornilloComponent {

  createTornillo: FormGroup = new FormGroup({
    name: new FormControl({ value: '', disabled: false}),
    price: new FormControl({ value: 0, disabled: false}),
    format: new FormControl({ value: '', disabled: false}),
    brand: new FormControl({ value: '', disabled: false})
  })

  constructor(public dialogRef: MatDialogRef<CreateTornilloComponent>) {}

}
