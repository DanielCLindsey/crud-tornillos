import { createReducer, on } from "@ngrx/store";
import { tornilloIdUpdated, tornillosInitialized, tornillosUpdated } from "./tornillos.actions";
import { TornillosState } from "./tornillos.state";

export const TORNILLOS_FEATURE_KEY = 'tornillos';

export const initialState: TornillosState = {
  nextId: 0,
  tornillos: []
};

export const tornilloReducer = createReducer(
  initialState,
  on(tornillosInitialized, (_state, { tornillos, nextId }): TornillosState => ({ tornillos, nextId })),
  on(tornillosUpdated, (state, { tornillos }): TornillosState => ({ ...state, tornillos })),
  on(tornilloIdUpdated, (state, { nextId }): TornillosState => ({...state, nextId}))
)
