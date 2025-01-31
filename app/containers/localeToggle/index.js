/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Toggle from '../../components/toggle';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../languageProvider/actions';
import { makeSelectLocale } from '../languageProvider/selectors';

export function LocaleToggle(props) {
  return (
    <Toggle
      value={props.locale}
      values={appLocales}
      messages={messages}
      onToggle={props.onLocaleToggle}
    />
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
