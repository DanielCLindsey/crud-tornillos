import { createReducer, on } from "@ngrx/store";
import { Tornillo } from "src/app/services/tornillos.service";
import {
  TornillosActions,
} from "./tornillos.actions";
import { TornillosState } from "./tornillos.state";

export const TORNILLOS_FEATURE_KEY = 'tornillos';

export const initialState: TornillosState = {
  tornillos: [],
  columnOrder: [
  {
    columnDef: 'name',
    header: 'Nombre',
    cell: (element: Tornillo) => `${element.name}`,
  },
  {
    columnDef: 'price',
    header: 'Precio',
    cell: (element: Tornillo) => `${element.price}`,
  },
  {
    columnDef: 'format',
    header: 'Formato',
    cell: (element: Tornillo) => `${element.format}`,
  },
  {
    columnDef: 'brand',
    header: 'Marca',
    cell: (element: Tornillo) => `${element.brand}`,
  }]
};

export const tornilloReducer = createReducer(
  initialState,
  on(TornillosActions.tornillosInitialized, (_state, { tornillos, columnOrder }): TornillosState => ({ tornillos, columnOrder })),
  on(TornillosActions.tornillosUpdated, (state, { tornillos }): TornillosState => ({...state, tornillos})),

  on(TornillosActions.tornilloCreated, (state): TornillosState => ({...state, selectedTornillo: undefined})),
  on(TornillosActions.tornilloDeleted, (state): TornillosState => ({...state, selectedTornillo: undefined})),
  on(TornillosActions.columnOrderChanged, (state, { columnOrder }): TornillosState => ({...state, columnOrder}))
)
