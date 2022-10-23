import { createReducer, on } from "@ngrx/store";
import { Tornillo } from "src/app/services/tornillos.service";
import { selectedTornilloChanged, tornilloCreated, tornilloDeleted, tornillosInitialized } from "./tornillos.actions";
import { TornillosState } from "./tornillos.state";

export const TORNILLOS_FEATURE_KEY = 'tornillos';

export const initialState: TornillosState = {
  nextId: 0,
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
  on(tornillosInitialized, (_state, { tornillos, nextId, columnOrder }): TornillosState => ({ tornillos, nextId, columnOrder })),

  on(tornilloCreated, (state): TornillosState => ({...state, selectedTornillo: undefined})),
  on(tornilloDeleted, (state): TornillosState => ({...state, selectedTornillo: undefined})),
  on(selectedTornilloChanged, (state, { selectedTornillo }): TornillosState => ({...state, selectedTornillo}))
)
