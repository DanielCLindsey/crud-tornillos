import { createAction, props, createActionGroup, emptyProps } from '@ngrx/store';
import { Tornillo, TornilloTableColumnDef } from 'src/app/services/tornillos.service';

export const TornillosActions = createActionGroup({
  source: 'Tornillos',
  events: {
    'Initialize tornillos': emptyProps(),
    'Tornillos initialized': props<{ tornillos: Tornillo[], columnOrder: TornilloTableColumnDef[] }>(),
    'Update tornillos': emptyProps(),
    'Tornillos updated': props<{ tornillos: Tornillo[] }>(),
    'Create tornillo': props<{ tornillo: Tornillo }>(),
    'Tornillo created': emptyProps(),
    'Delete tornillo': props<{ tornillo: Tornillo }>(),
    'Tornillo deleted': emptyProps(),
    'Change column order': props<{ columnOrder: TornilloTableColumnDef[]}>(),
    'Column order changed': props<{ columnOrder: TornilloTableColumnDef[]}>()
  }
});
