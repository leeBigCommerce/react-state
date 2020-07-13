export enum Type {
    'INCREMENT' = 'INCREMENT',
    'DECREMENT' = 'DECREMENT',
}

export interface Action {
    type: Type;
    payload: number;
}
