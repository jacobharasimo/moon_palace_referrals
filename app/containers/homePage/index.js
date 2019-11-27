/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { Flex, Box } from 'rebass';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { SelectableMap } from '../../components/selectableMap';
import { makeSelectLocation } from '../main/selectors';
const key = 'home';

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const locations = useSelector(makeSelectLocation());
  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
  }, []);

  return (
    <Flex>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Moon Palace Referrals, your next luxury vacation destination"
        />
      </Helmet>
      <Box variant="container">
        <SelectableMap
          onLocationSelect={location => {
            console.log(location);
          }}
          selectedLocation={{}}
          locations={locations}
        />
      </Box>
    </Flex>
  );
}

HomePage.propTypes = {};

export default compose(memo)(HomePage);
