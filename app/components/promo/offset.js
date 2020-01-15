import React from 'react';
import { Box, Card, Flex, Image } from 'rebass';
import PropTypes from 'prop-types';

export const OffsetPromo = props => (
  <Card {...props}>
    <Flex flexDirection={['column', 'row']}>
      <Box width={[0, 1 / 6]} />
      <Box width={[1, 3 / 6]} p={3}>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: props.bodyCopy }} />
      </Box>
      <Box width={[1, 2 / 6]}>
        <Image
          height={391}
          width="auto"
          src={props.promoImage}
          sx={{ objectFit: 'cover' }}
        />
      </Box>
    </Flex>
  </Card>
);

OffsetPromo.propTypes = {
  promoImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  bodyCopy: PropTypes.string.isRequired,
};
