/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../homePage/Loadable';
import NotFoundPage from '../notFoundPage/Loadable';
import Header from '../../components/header';
import Footer from '../../components/footer';

import GlobalStyle from '../../global-styles';
import { ThingsToDo } from '../thingsToDo';
import { Pages } from './constants';
import { MemberBenefits } from '../memberBenefits';
import { ResortDetails } from '../resortDetails';

export default function Main() {
  return (
    <>
      <Helmet
        titleTemplate="%s | Moon Palace Referral"
        defaultTitle="Moon Palace Referral"
      >
        <meta
          name="description"
          content="Moon Palace Referrals, your next luxury vacation destination"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path={Pages.home} component={HomePage} />
        <Route exact path={Pages.thingsToDo} component={ThingsToDo} />
        <Route path={Pages.location} component={ResortDetails} />
        <Route exact path={Pages.memberBenefits} component={MemberBenefits} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </>
  );
}
