import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TornillosService {

  constructor(private db: AngularFireDatabase) { }

  getTornillos(): Observable<Tornillo[]> {
    return this.db.list<Tornillo>('tornillos').valueChanges().pipe(take(1))
  }
}

export interface Tornillo {
  id: number;
  name: string;
  price: number;
  format: string;
  brand: string;
}
