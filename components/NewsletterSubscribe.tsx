import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { NewsletterForm } from './NewsletterForm';
import React from 'react';

type Props = {
  inputProps: {};
  buttonProps: any;
};

export const NewsletterSubscribe = ({ inputProps, buttonProps }: Props) => {

  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL!}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            buttonProps={buttonProps}
            inputProps={inputProps}
            onValidated={(formData): any => subscribe(formData)}
          />
        );
      }}
    />
  );
};
