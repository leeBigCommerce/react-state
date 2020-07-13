export interface State {
    count: number;
}

export const isCounterState = (state: object): state is State => typeof (state as State).count === 'number';
