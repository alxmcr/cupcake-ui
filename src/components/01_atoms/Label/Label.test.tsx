import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label test', () => {
  test('renders correctly', () => {
    const LABEL_TEXT = 'Elige un usuario';

    render(<Label htmlFor="label-user-combobox" text={LABEL_TEXT} />);

    // UI Elements
    const labelText = screen.getByText(LABEL_TEXT);

    // Assertions
    expect(labelText).toBeInTheDocument();
  });
});
