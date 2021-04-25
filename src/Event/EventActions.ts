import { createAction } from "typesafe-actions";

export const loadEvent = createAction('event/LOAD_EVENT')<number>();