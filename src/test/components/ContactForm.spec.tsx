import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import ContactForm from '../../components/ContactForm';
import { render } from '../test-utils';

describe('ContactForm', () => {
  it('renders the form correctly', () => {
    render(<ContactForm />);

    const email = screen.getByPlaceholderText('john@doe.com');
    const message = screen.getByPlaceholderText('Your Message...');
    expect(email).toHaveAttribute('id', 'email');
    expect(message).toHaveAttribute('id', 'message');
  });
});
