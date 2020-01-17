import React from 'react';
import { Box, Button, Card, Flex, Image, Link, Text } from 'rebass';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

export const SplitPromo = props => (
  <Card display="flex" flexDirection="column" variant="shadow" {...props}>
    <Flex flexDirection="column" flex="1">
      <Box>
        {props.sliderImages && (
          <Carousel
            interval={props.interval}
            axis={props.axis}
            showIndicators={props.showIndicators}
            transitionTime={700}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay
          >
            {props.sliderImages.map(image => (
              <Box
                key={image}
                height={[272, 260]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  height="100%"
                  sx={{ minWidth: '100%', objectFit: 'cover' }}
                  src={image}
                />
              </Box>
            ))}
          </Carousel>
        )}
        {!props.sliderImages && (
          <Box
            height={[272, 260]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              height="100%"
              sx={{ minWidth: '100%', objectFit: 'cover' }}
              src={props.promoImage}
            />
          </Box>
        )}
      </Box>
      <Box p={3} flex="1" display="flex" flexDirection="column">
        <Text as="h3" pb={2}>
          {props.title}
        </Text>
        {props.subTitle && (
          <Text pb={2} mt={-2} as="h5">
            {props.subTitle}
          </Text>
        )}
        <Text
          pb={3}
          as="p"
          dangerouslySetInnerHTML={{ __html: props.bodyCopy }}
        />
        {props.to && (
          <Button mt="auto" as={Link} to={props.to} width={1} variant="primary">
            {props.buttonText}
          </Button>
        )}
      </Box>
    </Flex>
  </Card>
);

SplitPromo.propTypes = {
  sliderImages: PropTypes.array,
  promoImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  bodyCopy: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  showIndicators: PropTypes.bool,
  interval: PropTypes.number,
  transitionTime: PropTypes.number,
  axis: PropTypes.oneOf(['vertical', 'horizontal']),
};

SplitPromo.defaultProps = {
  interval: 3000,
  subTitle: null,
  transitionTime: 900,
  showIndicators: true,
  sliderImages: null,
  promoImage: '//via.placeholder.com/540x320',
  buttonText: 'BUTTON',
  axis: 'horizontal',
};
