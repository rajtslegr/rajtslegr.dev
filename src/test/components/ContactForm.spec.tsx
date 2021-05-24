import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ContactForm from '../../components/ContactForm';

describe('ContactForm', () => {
  test('renders the form correctly', () => {
    const { getByPlaceholderText } = render(<ContactForm />);

    const email = getByPlaceholderText('john@doe.com');
    const message = getByPlaceholderText('Your Message...');
    expect(email).toHaveAttribute('id', 'email');
    expect(message).toHaveAttribute('id', 'message');
  });
});
