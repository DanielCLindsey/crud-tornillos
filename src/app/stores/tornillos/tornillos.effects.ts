import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, of, switchMap } from "rxjs";
import { TornillosService } from "src/app/services/tornillos.service";
import {  changeColumnOrder, columnOrderChanged, createTornillo, deleteTornillo, initTornillos, tornilloCreated, tornilloDeleted, tornillosInitialized, tornillosUpdated, updateTornillos } from "./tornillos.actions";
import { initialState } from "./tornillos.reducers";

@Injectable()
export class TornillosEffects {
  constructor(private actions$: Actions, private store: Store, private tornillosService: TornillosService) {}

  initTornillos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initTornillos),
      switchMap(() => this.tornillosService.getTornillos()),
      map((tornillos) => tornillosInitialized({ ...initialState, tornillos }))
    )
  });

  updateTornillos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTornillos),
      switchMap(() => this.tornillosService.getTornillos()),
      map((tornillos) => tornillosUpdated({ tornillos }))
    )
  });

  createTornillo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createTornillo),
      switchMap(({ tornillo }) => this.tornillosService.postTornillo(tornillo)),
      map(() => tornilloCreated())
    )
  });

  deleteTornillo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTornillo),
      switchMap(({ tornillo }) => this.tornillosService.deleteTornillo(tornillo)),
      map(() => tornilloDeleted())
    )
  });

  changeColumnOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(changeColumnOrder),
      map(({ columnOrder }) => columnOrderChanged({ columnOrder }))
    )
  });

}
