import React from 'react';

import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CounterProvider, useCounterReducer, CounterActionsTypes } from '.';

describe('useCounterReducer', () => {
    it('throws an error when not nested inside a CounterProvider', () => {
        const { result } = renderHook(() => useCounterReducer());

        expect(result.error.message).toBe(
            `'useCounterReducer' needs to be nested within a 'CounterProvider' component.`,
        );
    });

    describe('state', () => {
        describe('count', () => {
            it(`is 0 by default`, () => {
                const { result } = renderHook(() => useCounterReducer(), { wrapper: CounterProvider });
                const [state] = result.current;

                expect(state.count).toBe(0);
            });
        });
    });

    describe('dispatch', () => {
        it(`increments the value of 'count' by the number payload passed in, when given the increment action`, () => {
            const { result } = renderHook(() => useCounterReducer(), { wrapper: CounterProvider });
            const dispatch = result.current[1];

            act(() => {
                dispatch({ type: CounterActionsTypes.INCREMENT, payload: 1 });
            });

            expect(result.current[0].count).toBe(1);

            act(() => {
                dispatch({ type: CounterActionsTypes.INCREMENT, payload: 49 });
            });

            expect(result.current[0].count).toBe(50);
        });

        it(`decrements the value of 'count' by the number payload passed in, when given the decrement action`, () => {
            const { result } = renderHook(() => useCounterReducer(), { wrapper: CounterProvider });
            const dispatch = result.current[1];

            act(() => {
                dispatch({ type: CounterActionsTypes.DECREMENT, payload: 1 });
            });

            expect(result.current[0].count).toBe(-1);

            act(() => {
                dispatch({ type: CounterActionsTypes.DECREMENT, payload: 48 });
            });

            expect(result.current[0].count).toBe(-49);
        });
    });
});

describe('CounterProvider', () => {
    it('transparently renders child components passed into it', () => {
        const { container } = render(<CounterProvider>I should be the only thing here</CounterProvider>);

        expect(container.innerHTML).toBe('I should be the only thing here');
    });
});

describe('CounterActionsTypes', () => {
    it('provides a set of actions represented as strings', () => {
        expect(CounterActionsTypes).toStrictEqual({
            INCREMENT: expect.stringMatching(/.*/),
            DECREMENT: expect.stringMatching(/.*/),
        });
    });
});
