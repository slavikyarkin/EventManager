import { createAction } from "typesafe-actions";

export const loadCompany = createAction('company/LOAD_COMPANY')<number>();