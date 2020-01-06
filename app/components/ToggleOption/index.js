/**
 *
 * ToggleOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, useIntl } from 'react-intl';

const ToggleOption = ({ value, message }) => {
  const { formatMessage } = useIntl();
  return (
    <option value={value}>{message ? formatMessage(message) : value}</option>
  );
};

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
};

export default injectIntl(ToggleOption);
