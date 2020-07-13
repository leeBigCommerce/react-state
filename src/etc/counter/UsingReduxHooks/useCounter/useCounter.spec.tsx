import React from 'react';

import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CounterProvider, useCounter } from '.';

describe('useCounter', () => {
    // TODO: Redux throws its own error message
    xit('throws an error when not nested inside a CounterProvider', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.error.message).toBe(`'useCounter' needs to be nested within a 'CounterProvider' component.`);
    });

    describe('count', () => {
        it(`is 0 by default`, () => {
            const { result } = renderHook(() => useCounter(), { wrapper: CounterProvider });

            expect(result.current.count).toBe(0);
        });
    });

    describe('increment', () => {
        it(`increments the value of 'count' by the number passed in`, () => {
            const { result } = renderHook(() => useCounter(), { wrapper: CounterProvider });

            act(() => {
                result.current.increment(1);
            });

            expect(result.current.count).toBe(1);

            act(() => {
                result.current.increment(49);
            });

            expect(result.current.count).toBe(50);
        });
    });

    describe('decrement', () => {
        it(`decrements the value of 'count' by the number passed in`, () => {
            const { result } = renderHook(() => useCounter(), { wrapper: CounterProvider });

            act(() => {
                result.current.decrement(1);
            });

            expect(result.current.count).toBe(-1);

            act(() => {
                result.current.decrement(48);
            });

            expect(result.current.count).toBe(-49);
        });
    });
});

describe('CounterProvider', () => {
    it('transparently renders child components passed into it', () => {
        const { container } = render(<CounterProvider>I should be the only thing here</CounterProvider>);

        expect(container.innerHTML).toBe('I should be the only thing here');
    });
});
