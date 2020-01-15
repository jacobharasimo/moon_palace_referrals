/*
 * MapPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { Flex, Box } from 'rebass';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { SelectableMap } from '../../components/selectableMap';
import { makeSelectLocation } from '../main/selectors';
import { toProperCase } from '../../utils/string';

const key = 'map';

export function MapPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { resortType } = useParams();
  const locations = useSelector(makeSelectLocation(resortType));
  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
  }, []);

  return (
    <Flex>
      <Helmet>
        <title>{toProperCase(resortType)} Resorts</title>
        <meta
          name="description"
          content="Moon Palace Referrals, your next luxury vacation destination"
        />
      </Helmet>
      <Box variant="container">
        <SelectableMap locations={locations} />
      </Box>
    </Flex>
  );
}

MapPage.propTypes = {};

export default compose(memo)(MapPage);
