import { createAction, props } from '@ngrx/store';
import { Tornillo } from 'src/app/services/tornillos.service';

export const initTornillos            = createAction('[Tornillos] Tornillos initializing');
export const tornillosInitialized     = createAction('[Tornillos] Tornillos initialized', props<{ tornillos: Tornillo[] }>());
export const reloadTornillos          = createAction('[Tornillos] Tornillos reloading');
export const tornillosReloaded        = createAction('[Tornillos] Tornillos reloaded', props<{ tornillos: Tornillo[] }>());

export const createTornillo           = createAction('[Tornillo] Creating tornillo', props<{ tornillo: Tornillo }>());
export const tornilloCreated          = createAction('[Tornillo] Tornillo created', props<{ tornillo: Tornillo }>());
export const updateTornillo           = createAction('[Tornillo] Updating tornillo', props<{ id: number }>());
export const tornilloUpdated          = createAction('[Tornillo] Tornillo updated', props<{ tornillo: Tornillo[] }>());
export const deleteTornillo           = createAction('[Tornillo] Deleting tornillo', props<{ tornillo: Tornillo[] }>());
export const tornilloDeleted          = createAction('[Tornillo] Tornillo deleted', props<{ tornillo: Tornillo[] }>());
