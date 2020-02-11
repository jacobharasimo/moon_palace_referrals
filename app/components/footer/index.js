import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Flex, Box, Link, Text, Button } from 'rebass';
import { Pages } from '../../containers/main/constants';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Flex mt={2} p={3} bg="charcoal" color="white">
      <Box as="nav" variant="container">
        <Flex as="ul" variant="unstyledList" alignItems="center">
          <Box as="li">
            <Link as={RouterLink} to={Pages.contact}>
              Contact Us
            </Link>
          </Box>
          <Box mx="auto" as="li" />
          <Box as="li" mx={2}>
            <Button
              variant="white"
              fontWeight="bold"
              as={RouterLink}
              to={Pages.book}
            >
              Book
            </Button>
          </Box>
          <Box as="li" ml={2}>
            <Text as="span" fontSize={0}>
              &copy; {year} Palace Referral
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Footer;
