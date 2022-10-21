import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TornillosService {

  constructor() { }
}

export interface Tornillo {
  name: string;
  price: number;
  format: string;
  brand: string;
}
