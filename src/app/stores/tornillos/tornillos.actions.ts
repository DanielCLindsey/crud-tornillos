import { createAction, props } from '@ngrx/store';
import { Tornillo, TornilloTableColumnDef } from 'src/app/services/tornillos.service';

export const initTornillos            = createAction('[Tornillos] Tornillos initializing');
export const tornillosInitialized     = createAction('[Tornillos] Tornillos initialized', props<{ tornillos: Tornillo[], columnOrder: TornilloTableColumnDef[] }>());
export const updateTornillos          = createAction('[Tornillos] Updating tornillos');
export const tornillosUpdated         = createAction('[Tornillos] Tornillos updated', props<{ tornillos: Tornillo[] }>());

export const createTornillo           = createAction('[Tornillo] Creating tornillo', props<{ tornillo: Tornillo }>());
export const tornilloCreated          = createAction('[Tornillo] Tornillo created');
export const deleteTornillo           = createAction('[Tornillo] Deleting tornillo', props<{ tornillo: Tornillo }>());
export const tornilloDeleted          = createAction('[Tornillo] Tornillo deleted');

export const changeColumnOrder        = createAction('[Column Order] Changing column order', props<{ columnOrder: TornilloTableColumnDef[]}>());
export const columnOrderChanged       = createAction('[Column Order] Column order changed', props<{ columnOrder: TornilloTableColumnDef[]}>());
