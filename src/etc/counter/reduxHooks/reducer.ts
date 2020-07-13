import { Action, Type } from './actions';
import { State } from './state';

// eslint-disable-next-line complexity
export const reducer = (state: State = { count: 0 }, action: Action): State => {
    switch (action.type) {
        case Type.INCREMENT:
            return { count: state.count + action.payload };
        case Type.DECREMENT:
            return { count: state.count - action.payload };
        default:
            return state;
    }
};
