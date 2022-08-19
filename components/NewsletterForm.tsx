import { useState } from 'react';
import { decode } from 'html-entities';

export const NewsletterForm = ({ status, message, onValidated }) => {

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError('');

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    if (!firstName) {
      setError('Please enter your first name');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email, MERGE1: firstName });

    console.log(error, email, firstName);

    // On success return true
    return firstName && email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event: React.KeyboardEvent) => {
    setError('');
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: string) => {
    if (!message) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <div className="d-flex newsletter-input-fields">
        <div className="mc-field-group">
          <input
            onChange={(event) => setFirstName(event?.target?.value ?? '')}
            type="text"
            placeholder="First Name"
            className="mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="mc-field-group">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            className="mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button className="wp-block-button__link" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="newsletter-form-info">
        {status === "sending" && <div>Sending...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </>
  );
};