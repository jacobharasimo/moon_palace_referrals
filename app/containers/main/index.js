/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import { useIntl } from 'react-intl';

import MapPage from '../resorts/Loadable';
import NotFoundPage from '../notFoundPage/Loadable';
import Header from '../../components/header';
import Footer from '../../components/footer';
import messages from './messages';
import GlobalStyle from '../../global-styles';
import { ThingsToDo } from '../thingsToDo';
import { Pages } from './constants';
import { MemberBenefits } from '../memberBenefits';
import { ResortDetails } from '../resortDetails';
import { HomePage } from '../home';
import { ContactUs } from '../contactUs';
import { Book } from '../book';

export default function Main() {
  const { formatMessage } = useIntl();

  return (
    <>
      <Helmet
        titleTemplate={`%s | ${formatMessage(messages.defaultTitle)}`}
        defaultTitle={formatMessage(messages.defaultTitle)}
      >
        <meta
          name="description"
          content={formatMessage(messages.pageDescription)}
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path={Pages.home} component={HomePage} />
        <Route exact path={Pages.map} component={MapPage} />
        <Route exact path={Pages.thingsToDo} component={ThingsToDo} />
        <Route exact path={Pages.memberBenefits} component={MemberBenefits} />
        <Route exact path={Pages.contact} component={ContactUs} />
        <Route exact path={Pages.book} component={Book} />
        <Route path={Pages.location} component={ResortDetails} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </>
  );
}
