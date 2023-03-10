import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TornillosActions } from 'src/app/stores/tornillos/tornillos.actions';
import { selectTornillosAmount } from 'src/app/stores/tornillos/tornillos.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  tornillosAmount$ = this.store.select(selectTornillosAmount);
  tornillosAmountSub?: Subscription;
  hasToCheck: boolean = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(TornillosActions.initializeTornillos());

    this.tornillosAmountSub = this.tornillosAmount$.subscribe((amount) => {
      this.hasToCheck = amount > 0;
    })
  }

  ngOnDestroy(): void {
    this.tornillosAmountSub?.unsubscribe();
  }
}
