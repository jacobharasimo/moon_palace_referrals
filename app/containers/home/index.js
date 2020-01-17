import React from 'react';
import { Flex, Box, Image } from 'rebass';
import { Helmet } from 'react-helmet-async';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useIntl } from 'react-intl';
import messages from './messages';

import bowling from '../../images/slider/family/bowling.jpg';
import dolphin from '../../images/slider/family/dolphin.jpg';
import playroom from '../../images/slider/family/playroom.jpg';
import waterslide from '../../images/slider/family/waterslide.jpg';
import wiredLounge from '../../images/slider/family/wired_lounge.jpg';

import slide1 from '../../images/slide/slide-1.jpg';
import slide2 from '../../images/slide/slide-2.jpg';
import slide3 from '../../images/slide/slide-3.jpg';
import palaceLife from '../../images/palace-life.jpg';
import { OffsetPromo } from '../../components/promo/offset';
import { SplitPromo } from '../../components/promo/split';
import adultResort from '../../images/slider/adult/adult_resort.jpg';
import golf from '../../images/slider/adult/golf.jpg';
import leBlanc from '../../images/slider/adult/le_blanc_resturant.jpg';
import losCabos from '../../images/slider/adult/los_cabos.jpg';
import { Pages } from '../main/constants';

const adultImage = [leBlanc, losCabos, golf, adultResort];
const familyImages = [bowling, dolphin, playroom, waterslide, wiredLounge];

export const HomePage = () => {
  const { formatMessage } = useIntl();
  return (
    <Flex flexDirection="column">
      <Helmet>
        <title>Home Page</title>
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
          <Box
            height={[272, 520]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              height="100%"
              sx={{ minWidth: '100%', objectFit: 'cover' }}
              src={slide1}
            />
          </Box>
          <Box
            height={[272, 520]}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              height="100%"
              sx={{ minWidth: '100%', objectFit: 'cover' }}
              src={slide2}
            />
          </Box>
          <Box
            height={[272, 520]}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              height="100%"
              sx={{ minWidth: '100%', objectFit: 'cover' }}
              src={slide3}
            />
          </Box>
        </Carousel>
      </Box>
      <Box my={2}>
        <OffsetPromo
          title={formatMessage(messages.promo1Title)}
          subTitle={formatMessage(messages.promo1SubTitle)}
          bodyCopy={formatMessage(messages.promo1BodyCopy)}
          promoImage={palaceLife}
          bg="white"
          color="black"
          p={0}
        />
      </Box>
      <Box variant="container" my={2}>
        <Flex flexDirection={['column-reverse', 'row']}>
          <Box width={[1, 1 / 2]} mr={2} variant="alignHeight">
            <SplitPromo
              transitionTime={900}
              to={Pages.family}
              sliderImages={familyImages}
              title={formatMessage(messages.familyResortTitle)}
              bodyCopy={formatMessage(messages.familyResortBody)}
              buttonText={formatMessage(messages.familyResortButton)}
            />
          </Box>
          <Box width={[1, 1 / 2]} ml={2} variant="alignHeight">
            <SplitPromo
              interval={3950}
              transitionTime={900}
              sliderImages={adultImage}
              to={Pages.adult}
              title={formatMessage(messages.adultResortTitle)}
              bodyCopy={formatMessage(messages.adultResortBody)}
              buttonText={formatMessage(messages.adultResortButton)}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
