import React from 'react';
import { Box, Button, Card, Flex, Image, Link } from 'rebass';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

export const SplitPromo = props => (
  <Card variant="shadow" {...props}>
    <Flex flexDirection="column">
      <Box>
        {props.sliderImages && (
          <Carousel
            transitionTime={700}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay
          >
            {props.sliderImages.map(image => (
              <Box
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
        {!props.sliderImages && <Image src={props.promoImage} />}
      </Box>
      <Box p={3}>
        <h3>{props.title}</h3>
        {props.subTitle && <h5>{props.subTitle}</h5>}
        <p dangerouslySetInnerHTML={{ __html: props.bodyCopy }} />
        {props.to && (
          <Button as={Link} to={props.to} width={1} variant="primary">
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
  subTitle: PropTypes.string.isRequired,
  bodyCopy: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

SplitPromo.defaultProps = {
  sliderImages: null,
  promoImage: '//via.placeholder.com/540x320',
  buttonText: 'BUTTON',
};
