import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { createTornillo } from 'src/app/stores/tornillos/tornillos.actions';

@Component({
  selector: 'app-create-tornillo',
  templateUrl: './create-tornillo.component.html',
  styleUrls: ['./create-tornillo.component.scss']
})
export class CreateTornilloComponent {

  createTornillo: FormGroup = new FormGroup({
    name: new FormControl({ value: '', disabled: false}, [Validators.required]),
    price: new FormControl({ value: 0, disabled: false}, [Validators.required]),
    format: new FormControl({ value: '', disabled: false}, [Validators.required]),
    brand: new FormControl({ value: '', disabled: false}, [Validators.required])
  })

  constructor(public dialogRef: MatDialogRef<CreateTornilloComponent>, private store: Store) {}

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

  submit() {
    this.store.dispatch(createTornillo({ tornillo: this.createTornillo.value }));
    this.close();
  }

  close() {
    this.dialogRef.close()
  }
}
