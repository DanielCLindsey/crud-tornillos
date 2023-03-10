import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, switchMap } from "rxjs";
import { TornillosService } from "src/app/services/tornillos.service";
import { TornillosActions } from "./tornillos.actions";
import { initialState } from "./tornillos.reducers";

@Injectable()
export class TornillosEffects {
  constructor(private actions$: Actions, private store: Store, private tornillosService: TornillosService) {}

  initTornillos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TornillosActions.initializeTornillos
      ),
      switchMap(() => this.tornillosService.getTornillos()),
      map((tornillos) => TornillosActions.tornillosInitialized({ ...initialState, tornillos }))
    )
  });

  updateTornillos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TornillosActions.updateTornillos),
      switchMap(() => this.tornillosService.getTornillos()),
      map((tornillos) => TornillosActions.tornillosUpdated({ tornillos }))
    )
  });

  createTornillo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TornillosActions.createTornillo),
      switchMap(({ tornillo }) => this.tornillosService.postTornillo(tornillo)),
      map(() => TornillosActions.tornilloCreated())
    )
  });

  deleteTornillo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TornillosActions.deleteTornillo),
      switchMap(({ tornillo }) => this.tornillosService.deleteTornillo(tornillo)),
      map(() => TornillosActions.tornilloDeleted())
    )
  });

  changeColumnOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TornillosActions.changeColumnOrder),
      map(({ columnOrder }) => TornillosActions.columnOrderChanged({ columnOrder }))
    )
  });

}
