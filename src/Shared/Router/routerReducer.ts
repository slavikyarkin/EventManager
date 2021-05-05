import { ActionType, getType } from 'typesafe-actions';
import * as routerActions from './routerActions';
import { RouterState } from './RouterState';

export type RouterAction = ActionType<typeof routerActions>;

const initialState: RouterState = {
};

const routerReducer = (state: RouterState = initialState, action: RouterAction): RouterState => {

    switch (action.type) {
        case getType(routerActions.redirect):
            return {
                ...state,
                router: {
                    ...state.router,
                    redirectTo: action.payload
                }
            };
        default:
            return {
                ...state,
                router: {
                    ...state.router,
                    redirectTo: undefined
                }
            };
    };
}

export { routerReducer }