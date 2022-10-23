import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TORNILLOS_FEATURE_KEY } from "./tornillos.reducers";
import { TornillosState } from "./tornillos.state";

export const selectTornillos        = createFeatureSelector<TornillosState>(TORNILLOS_FEATURE_KEY);
export const selectTornillosList    = createSelector(selectTornillos, ({ tornillos }) => tornillos);
export const selectTornillosAmount  = createSelector(selectTornillos, ({ tornillos }) => tornillos.length);
export const selectSelectedTornillo = createSelector(selectTornillos, ({ selectedTornillo }) => selectedTornillo);
export const selectColumnOrder      = createSelector(selectTornillos, ({ columnOrder }) => columnOrder);
