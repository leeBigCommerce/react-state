import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { allExamples } from './allExamples';

describe.each(allExamples)('%s', (_, Example) => {
    it(`shows both counter values as 0 by default`, () => {
        render(<Example />);

        expect(screen.getByText('First Component: 0')).toBeInTheDocument();
        expect(screen.getByText('Second Component: 0')).toBeInTheDocument();
    });

    it(`shows both counter values as 37 after clicking 'Add 37'`, () => {
        render(<Example />);

        userEvent.click(screen.getByText('Add 37'));

        expect(screen.getByText('First Component: 37')).toBeInTheDocument();
        expect(screen.getByText('Second Component: 37')).toBeInTheDocument();
    });

    it(`shows both counter values as 19 after clicking 'Add 37', 'Add 5', 'Add 2' and then 'Minus 15'`, () => {
        render(<Example />);

        userEvent.click(screen.getByText('Add 37'));
        userEvent.click(screen.getByText('Minus 5'));
        userEvent.click(screen.getByText('Add 2'));
        userEvent.click(screen.getByText('Minus 15'));

        expect(screen.getByText('First Component: 19')).toBeInTheDocument();
        expect(screen.getByText('Second Component: 19')).toBeInTheDocument();
    });
});
