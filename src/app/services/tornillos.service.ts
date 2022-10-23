import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { DatabaseReference } from '@angular/fire/compat/database/interfaces';
import { Store } from '@ngrx/store';
import { from, Observable, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TornillosService {

  constructor(private db: AngularFireDatabase, private store: Store) { }

  getTornillos(): Observable<Tornillo[]> {
    return this.db.list<Tornillo>('tornillos').valueChanges()
  }

  postTornillo(tornillo: Tornillo): Observable<DatabaseReference>{
    return from(this.db.list<Tornillo>('tornillos').push(tornillo));
  }
}

export interface Tornillo {
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
