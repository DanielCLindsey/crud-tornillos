import { createAction, props } from '@ngrx/store';
import { Tornillo } from 'src/app/services/tornillos.service';

export const initTornillos            = createAction('[Tornillos] Tornillos initializing');
export const tornillosInitialized     = createAction('[Tornillos] Tornillos initialized', props<{ nextId: number, tornillos: Tornillo[] }>());
export const updateTornillos          = createAction('[Tornillos] Updating tornillos', props<{ tornillos: Tornillo[] }>());
export const tornillosUpdated         = createAction('[Tornillos] Tornillos updated', props<{ tornillos: Tornillo[] }>());
export const tornilloIdUpdated        = createAction("[Tornillos] Tornillos' next id updated", props<{ nextId: number }>())

export const createTornillo           = createAction('[Tornillo] Creating tornillo', props<{ tornillo: Tornillo }>());
export const tornilloCreated          = createAction('[Tornillo] Tornillo created');
export const updateTornillo           = createAction('[Tornillo] Updating tornillo', props<{ id: number }>());
export const tornilloUpdated          = createAction('[Tornillo] Tornillo updated');
export const deleteTornillo           = createAction('[Tornillo] Deleting tornillo', props<{ tornillo: Tornillo }>());
export const tornilloDeleted          = createAction('[Tornillo] Tornillo deleted');
export const changeSelectedTornillo   = createAction('[Tornillo] Tornillo selected change', props<{ selectedTornillo?: Tornillo }>())
