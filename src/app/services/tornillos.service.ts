import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { DatabaseReference, DataSnapshot } from '@angular/fire/compat/database/interfaces';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { updateTornillos } from '../stores/tornillos/tornillos.actions';


@Injectable({
  providedIn: 'root'
})
export class TornillosService {

  constructor(private db: AngularFireDatabase, private store: Store) {

  }

  getTornillos(): Observable<Tornillo[]> {
    return from(this.db.database.ref('tornillos').get().then((snapshot) => {
      const tornillos: Tornillo[] = [];
      if(snapshot.exists()) {
        const values: DataSnapshot = snapshot.val();
        const valueRefs = Object.keys(values);

        tornillos.push(...valueRefs.map((reference) => ({
          reference,
          ...snapshot.child(reference).val()
        })))
      }
      return tornillos;
    }))
  }

  postTornillo(tornillo: Tornillo): Observable<DatabaseReference>{
    return from(this.db.list<Tornillo>('tornillos').push(tornillo).then((tornillo) => {
      this.store.dispatch(updateTornillos())
      return tornillo;
    }));
  }
}

export interface Tornillo {
  reference: string;
  name: string;
  price: number;
  format: string;
  brand: string;
}

export interface TornilloTableColumnDef {
  columnDef: string,
  header: string,
  cell: (element: Tornillo) => string;
}
