import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { allExamples } from './allExamples';

describe.each(allExamples)('%s', (_, Example) => {
    it(`shows the user a "please click" message`, () => {
        render(<Example />);

        expect(screen.getByText('Please click the button')).toBeInTheDocument();
    });

    it(`thanks the user for clicking the button`, () => {
        render(<Example />);

        userEvent.click(screen.getByText('Click Me'));

        expect(screen.getByText('Thank you')).toBeInTheDocument();
    });

    it(`disables the button after it is clicked`, () => {
        render(<Example />);

        const button = screen.getByText('Click Me');

        userEvent.click(button);

        expect(button).toBeDisabled();
    });
});
