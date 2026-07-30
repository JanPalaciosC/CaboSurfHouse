import { useState } from 'react';

const Footer = () => {
  // State to manage the status of the form submission button
  const [status, setStatus] = useState('SUBMIT');
  // State to hold any error messages from the form submission
  const [errorMessage, setErrorMessage] = useState('');

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SENDING...');
    setErrorMessage(''); // Limpiamos cualquier error previo al intentar de nuevo

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xnjeyqwz', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('MESSAGE SENT!');
        form.reset(); // Clears the form fields after successful submission
        setTimeout(() => setStatus('SUBMIT'), 3000); // Returns the button to its original state after 3 seconds
      } else {
        // If the response is not ok, we try to parse the error message from Formspree
        const errorData = await response.json();
        if (Object.hasOwn(errorData, 'errors')) {
          // Formspree returns a list of errors (e.g., "the email is not valid")
          const formspreeErrors = errorData.errors.map((err: any) => err.message).join(', ');
          setErrorMessage(`Error: ${formspreeErrors}`);
        } else {
          setErrorMessage('Oops! There was a problem submitting your form.');
        }
        setStatus('SUBMIT'); // Returns the button to its original state
      }
    } catch (error) {
      // If the fetch fails (network error), we catch it here
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('SUBMIT');
    }
  };

  return (
    <footer id="contact" className="flex w-full flex-col bg-baja-blue pt-16">
      <div className="flex w-full flex-col gap-12 px-6 pb-16 sm:px-8 md:px-16 lg:flex-row lg:gap-16 lg:px-24">
        {/* Contact Form */}
        <div className="flex-1 border border-white/20 p-6 sm:p-8 shadow-lg">
          <h2 className="mb-8 text-center font-serif text-2xl font-semibold tracking-widest text-baja-light uppercase">
            CONTACT US
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 font-sans">
            {/* First Name & Last Name */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="flex flex-1 flex-col">
                <label htmlFor="firstName" className="mb-1 text-sm text-baja-light">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="bg-baja-light p-2 text-baja-dark outline-none transition-all focus:ring-2 focus:ring-baja-green"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <label htmlFor="lastName" className="mb-1 text-sm text-baja-light">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="bg-baja-light p-2 text-baja-dark outline-none transition-all focus:ring-2 focus:ring-baja-green"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm text-baja-light">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-baja-light p-2 text-baja-dark outline-none transition-all focus:ring-2 focus:ring-baja-green"
              />
            </div>

            {/* Phone number */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 text-sm text-baja-light">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="bg-baja-light p-2 text-baja-dark outline-none transition-all focus:ring-2 focus:ring-baja-green"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-sm text-baja-light">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="resize-none bg-baja-light p-2 text-baja-dark outline-none transition-all focus:ring-2 focus:ring-baja-green"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex flex-col items-start space-y-2">
              <button
                type="submit"
                disabled={status === 'SENDING...'}
                className="w-full sm:w-[180px] bg-baja-green px-6 py-3 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-white hover:text-baja-green cursor-pointer disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-wait"
              >
                {status}
              </button>

              {/* Error Message */}
              {errorMessage && <p className="text-sm font-semibold text-red-400">{errorMessage}</p>}
            </div>
          </form>
        </div>

        {/* Location container */}
        <div id="location" className="flex flex-1 flex-col items-center">
          <h2 className="mb-8 text-center font-serif text-2xl font-semibold tracking-widest text-baja-light uppercase">
            LOCATION
          </h2>
          <div className="h-full min-h-[300px] sm:min-h-[400px] w-full overflow-hidden border border-white/20 bg-baja-light shadow-lg">
            <iframe
              title="Baja Surf House Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14681.45155303303!2d-109.58580294970301!3d23.08380805297595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af581b550de16d%3A0x457174cea20b4e87!2sPlaya%20Los%20Zacatitos!5e0!3m2!1ses!2smx!4v1785271736501!5m2!1ses!2smx"
              className="h-full w-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Inferior Bar */}
      <div className="w-full border-t border-white/10 bg-baja-blue py-6 text-center font-sans text-sm tracking-wide text-baja-light/70">
        <p>BajaSurHouse Copyright 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
