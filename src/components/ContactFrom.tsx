import { useForm, ValidationError } from '@formspree/react';

const LoadingIcon = (
  <svg
    className="w-5 h-5 text-white animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm('xyylyppy');

  // if (state.errors) {
  //   alert('duh');
  // }

  if (state.succeeded) {
    return <p>Thank&#39;s for your message! I&#39;ll get back to you as soon as possible.</p>;
  }

  return (
    <form
      className="flex flex-col items-center justify-center w-full space-y-4 sm:w-4/6 lg:w-1/2"
      onSubmit={handleSubmit}
    >
      <div className="self-start text-xl">Get in touch!</div>
      <input
        className="w-full p-2 border border-gray-200 rounded-md shadow focus:shadow-lg sm:text-sm dark:bg-gray-600"
        placeholder="john@doe.com"
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className="w-full h-48 p-2 border border-gray-200 rounded-md shadow focus:shadow-lg sm:text-sm dark:bg-gray-600"
        placeholder="Your Message..."
        id="message"
        name="message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="flex justify-center w-24 p-3 mt-3 transition bg-gray-200 rounded-lg shadow mx:auto dark:bg-gray-600 hover:shadow-lg"
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? LoadingIcon : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
