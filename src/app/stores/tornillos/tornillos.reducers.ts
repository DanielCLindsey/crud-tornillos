import { createReducer } from "@ngrx/store";
import { TornillosState } from "./tornillos.state";

export const TORNILLOS_FEATURE_KEY = 'tornillos';

export const initialState: TornillosState = {
  tornillos: []
};

export const tornilloReducer = createReducer(
  initialState
)
