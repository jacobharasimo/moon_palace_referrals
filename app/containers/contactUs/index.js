import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export const ContactUs = () => (
  <article>
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  </article>
);
