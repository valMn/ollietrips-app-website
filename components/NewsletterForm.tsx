import { useEffect, useState } from 'react';
import {
  Button, Input, FormErrorMessage, Alert,
  AlertIcon, AlertTitle, AlertDescription, FormControl, FormLabel, FormHelperText
} from "@chakra-ui/react";
import { stringify } from "querystring";

type Props = {
  status: 'success' | 'error' | 'sending' | null;
  message: string | Error | null;
  onValidated: (formData: any) => void;
  buttonProps: any;
  inputProps: {};
};

export const NewsletterForm = ({ status, message, onValidated, buttonProps, inputProps }: Props) => {
  type ErrorProps = { email?: string, firstName?: string; }

  const [formWasSubmitted, setFormWasSubmitted] = useState(false)
  const [error, setError] = useState<ErrorProps>({ email: '', firstName: '' });
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    let timer: any;

    if (status === 'success') {
      timer = setTimeout(() => {
        setEmail('');
        setFirstName('');
        setFormWasSubmitted(true);
      }, 3000);
    }

    return () => clearTimeout(timer);

  }, [status])

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = (event?: React.SyntheticEvent) => {
    event && event.preventDefault();
    setError({});

    if (!firstName) {
      setError({
        firstName: 'Please enter your first name'
      });
      return null;
    }

    if (!email) {
      setError({ email: 'Please enter a valid email address' });
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email, MERGE1: firstName });
    // On success return true
    return firstName && email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event: React.KeyboardEvent) => {
    // setError({});
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
  // const getMessage = (message: string) => {
  //   if (!message) {
  //     return null;
  //   }
  //   const result = message?.split('-') ?? null;
  //   if ("0" !== result?.[0]?.trim()) {
  //     return message
  //   }
  // };

  return (
    <>
      {inputProps && <>
        <FormControl isInvalid={error.firstName}>
        <Input {...inputProps}
          value={firstName}
          onChange={(event) => setFirstName(event?.target?.value ?? '')}
          onKeyUp={(event) => handleInputKeyEvent(event)}
          placeholder='First Name' type='text' />
          <FormErrorMessage>{error.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={error.email}>
        <Input {...inputProps}
          value={email}
          onChange={(event) => setEmail(event?.target?.value ?? '')}
          onKeyUp={(event) => handleInputKeyEvent(event)}
          placeholder='Your Email' type='email' />
          <FormErrorMessage>{error.email}</FormErrorMessage>
        </FormControl>
      </>}
      {buttonProps &&
        <Button {...buttonProps}
          type='submit'
          onClick={handleFormSubmit}
        >{buttonProps.label}
        </Button>
      }
      {!formWasSubmitted && status === 'success' &&
        <Alert status='success' rounded='full'>
          <AlertIcon />
          <AlertDescription >Details submitted. Nice!</AlertDescription>
        </Alert>}
    </>
  );
};

function ErrorMessageExample() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === '';

  return (
    <FormControl >
      <Input
        type='email'
        value={input}
        onChange={handleInputChange}
      />

      <FormErrorMessage>Email is required.</FormErrorMessage>

    </FormControl>
  );
}