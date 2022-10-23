import { createReducer, on } from "@ngrx/store";
import { Tornillo } from "src/app/services/tornillos.service";
import { columnOrderChanged, tornilloCreated, tornilloDeleted, tornillosInitialized, tornillosUpdated } from "./tornillos.actions";
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
  on(tornillosInitialized, (_state, { tornillos, columnOrder }): TornillosState => ({ tornillos, columnOrder })),
  on(tornillosUpdated, (state, { tornillos }): TornillosState => ({...state, tornillos})),

  on(tornilloCreated, (state): TornillosState => ({...state, selectedTornillo: undefined})),
  on(tornilloDeleted, (state): TornillosState => ({...state, selectedTornillo: undefined})),
  on(columnOrderChanged, (state, { columnOrder }): TornillosState => ({...state, columnOrder}))
)
