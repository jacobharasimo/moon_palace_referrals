import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';

export const NavItem = ({ title, subNav }) => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <Box
      as="li"
      px={2}
      py={1}
      variant="navItem"
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={() => toggleOpen(false)}
      onFocus={() => toggleOpen(true)}
      onBlur={() => toggleOpen(false)}
      tabIndex="0"
    >
      {title}
      <Flex
        variant="subNav"
        as="ul"
        sx={{
          display: `${isOpen ? '' : 'none!important'}`,
        }}
      >
        <Box as="li" px={2} py={1} variant="subNavItem">
          {subNav.map(navItem => (
            <a href={navItem.link}>{navItem.title}</a>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  subNav: PropTypes.array.isRequired,
};
