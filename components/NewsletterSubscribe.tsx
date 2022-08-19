import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { NewsletterForm } from './NewsletterForm';
import React from 'react';

type Props = {
  inputProps: {};
  buttonProps: any;
};

export const NewsletterSubscribe = ({ inputProps, buttonProps }: Props) => {

  const MAILCHIMP_URL = 'https://ollieapp.us17.list-manage.com/subscribe/post?u=ac506f0fffdedcff6f440d0f1&amp;id=48c9318fc1&amp;f_id=006644e0f0'

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
