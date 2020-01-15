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
import adultResort from '../../images/adult-resort.jpg';
import { Pages } from '../main/constants';

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
          <Box width={[1, 1 / 2]} mr={2}>
            <SplitPromo
              sliderImages={familyImages}
              title="Family"
              bodyCopy="Palace Resorts isn't your normal resort chain, they are an empire of opulence where more is more, only the best is good enough, and options galore dazzle and excite. Catering to guests of all ages, like the amazing Playroom for our tiny guests, our chic WIRED lounge for all the family and much more."
              to={Pages.family}
              buttonText="Family Resorts"
            />
          </Box>
          <Box width={[1, 1 / 2]} ml={2}>
            <SplitPromo
              promoImage={adultResort}
              title="Adult"
              to={Pages.adult}
              buttonText="Adult Resorts"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
