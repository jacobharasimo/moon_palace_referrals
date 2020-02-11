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
import { Flex, Box, Image } from 'rebass';
import { Carousel } from 'react-responsive-carousel';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { SelectableMap } from '../../components/selectableMap';
import { toProperCase } from '../../utils/string';
import { makeSelectLocation, makeSelectSliders } from './selectors';

const key = 'resorts';

export function MapPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { resortType } = useParams();
  const locations = useSelector(makeSelectLocation(resortType));
  const slides = useSelector(makeSelectSliders(resortType));

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
  }, []);

  return (
    <Flex flexDirection="column">
      <Helmet>
        <title>{toProperCase(resortType)} Resorts</title>
        <meta
          name="description"
          content="Moon Palace Referrals, your next luxury vacation destination"
        />
      </Helmet>
      <Box mb={2}>
        <Carousel
          transitionTime={700}
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
        >
          {slides.map(slide => (
            <Box
              height={[272, 400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                height="100%"
                sx={{ minWidth: '100%', objectFit: 'cover' }}
                src={slide}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box my={2} bg="white">
        <Flex>
          <Box variant="container">
            <SelectableMap
              center={[-85, 22]}
              fontSize={1.5}
              zoom={11}
              locations={locations}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

MapPage.propTypes = {};

export default compose(memo)(MapPage);
