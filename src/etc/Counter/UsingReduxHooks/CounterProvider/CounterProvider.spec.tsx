import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import { CounterProvider, CounterActionsTypes } from '.';

describe('CounterProvider', () => {
    it('transparently renders child components passed into it', () => {
        const { container } = render(<CounterProvider>I should be the only thing here</CounterProvider>);

        expect(container.innerHTML).toBe('I should be the only thing here');
    });

    it(`provides the counter store to any child component using Redux's 'useSelector'`, () => {
        const { result } = renderHook(() => useSelector((store) => store), { wrapper: CounterProvider });

        expect(result.current).toStrictEqual({ count: 0 });
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
