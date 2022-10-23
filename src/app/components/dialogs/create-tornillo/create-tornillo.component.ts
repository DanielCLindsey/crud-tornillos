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

  decreaseNumber(control: string) {
    const selectedControl = this.createTornillo.get([control]);
    let currentValue = selectedControl?.value ?? 0;

    if(currentValue > 0) {
      //Avoid 0.30000000000000004
      currentValue = (currentValue * 10 - 1)/10;
      selectedControl?.setValue(currentValue);
    }
  }

  increaseNumber(control: string) {
    const selectedControl = this.createTornillo.get([control]);
    let currentValue = selectedControl?.value ?? 0;

    //Avoid 0.30000000000000004
    currentValue = (currentValue * 10 + 1)/10;

    selectedControl?.setValue(currentValue);
  }
}
