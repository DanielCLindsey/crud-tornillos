import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, of, switchMap } from "rxjs";
import { TornillosService } from "src/app/services/tornillos.service";
import { changeSelectedTornillo, createTornillo, deleteTornillo, initTornillos, selectedTornilloChanged, tornilloCreated, tornilloDeleted, tornillosInitialized } from "./tornillos.actions";
import { initialState } from "./tornillos.reducers";

@Injectable()
export class TornillosEffects {
  constructor(private actions$: Actions, private store: Store, private tornillosService: TornillosService) {}

  initTornillos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initTornillos),
      switchMap(() => this.tornillosService.getTornillos()),
      map((tornillos) => tornillosInitialized({ ...initialState, tornillos  }))
    )
  });
  createTornillo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createTornillo),
      switchMap(() => of()),
      map(() => tornilloCreated())
    )
  });

  deleteTornillo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTornillo),
      switchMap(() => of()),
      map(() => tornilloDeleted())
    )
  });

  changeSelectedTornillo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(changeSelectedTornillo),
      switchMap(() => of()),
      map((selectedTornillo) => selectedTornilloChanged({ selectedTornillo }))
    )
  })
}
