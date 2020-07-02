import React from 'react';

import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ButtonClickedProvider, useButtonClicked } from './buttonClicked';

describe('useButtonClicked', () => {
    it('throws an error when not nested inside a ButtonClickedProvider', () => {
        const { result } = renderHook(() => useButtonClicked());

        expect(result.error.message).toBe(
            `'useButtonClicked' needs to be nested within a 'ButtonClickedProvider' component.`,
        );
    });

    describe('buttonClicked', () => {
        it(`is 'false' by default`, () => {
            const { result } = renderHook(() => useButtonClicked(), { wrapper: ButtonClickedProvider });

            expect(result.current.buttonClicked).toBe(false);
        });
    });

    describe('clickButton', () => {
        it(`changes the value of 'buttonClicked' to 'true' after being invoked`, () => {
            const { result } = renderHook(() => useButtonClicked(), { wrapper: ButtonClickedProvider });

            act(result.current.clickButton);

            expect(result.current.buttonClicked).toBe(true);
        });
    });
});

describe('ButtonClickedProvider', () => {
    it('transparently renders child components passed into it', () => {
        const { container } = render(<ButtonClickedProvider>I should be the only thing here</ButtonClickedProvider>);

        expect(container.innerHTML).toBe('I should be the only thing here');
    });

    it('throws an error when nested inside a copy of itself', () => {
        const consoleError = jest.fn();
        const consoleErrorSpy = jest.spyOn(console, 'error');
        consoleErrorSpy.mockImplementation(consoleError);

        expect(() =>
            render(
                <ButtonClickedProvider>
                    <ButtonClickedProvider />
                </ButtonClickedProvider>,
            ),
        ).toThrow(`Do not nest multiple 'ButtonClickedProvider' components.`);

        consoleErrorSpy.mockRestore();
    });
});
