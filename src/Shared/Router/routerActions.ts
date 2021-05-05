import * as H from 'history';
import { createAction } from 'typesafe-actions';

export const redirect = createAction('router/REDIRECT')<string>();
export const init = createAction('router/INIT')<H.History>();
