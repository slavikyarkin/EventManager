import { createAction } from "typesafe-actions";

export const error = createAction('errors/ERROR')<Error>();