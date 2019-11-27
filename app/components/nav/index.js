import React from 'react';
import { Flex, Box } from 'rebass';
import { NavItem } from './navItem';

export const Nav = () => (
  <Flex as="ul" variant="navList">
    <NavItem title="Top Nav 1" subNav={[{ title: 'SubNav1', link: '/' }]} />
    <Box as="li" px={2} py={1}>
      Top Nav 2
    </Box>
    <Box as="li" px={2} py={1}>
      Top Nav 3
    </Box>
    <Box as="li" px={2} py={1}>
      Top Nav 4
    </Box>
  </Flex>
);
