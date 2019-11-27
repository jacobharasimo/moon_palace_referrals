import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Flex, Box, Button, Image, Text } from 'rebass';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import messages from './messages';
import LocaleToggle from '../../containers/localeToggle';
import {
  makeSelectAdultLocation,
  makeSelectFamilyLocation,
} from '../../containers/main/selectors';
import { Pages } from '../../containers/main/constants';

function Header() {
  const familyLocations = useSelector(makeSelectFamilyLocation);
  const adultLocations = useSelector(makeSelectAdultLocation);
  return (
    <Flex mb={3}>
      <Image
        p={3}
        pt={0}
        bg="black"
        src="https://www.moonpalace.com/themes/custom/mooncancun/images/logo.png"
        alt=""
      />
      <Box variant="container" as="nav">
        <Flex alignItems="center" as="ul">
          <Box as="li" variant="navItem">
            <Button variant="link" as={Link} to={Pages.home}>
              <FormattedMessage {...messages.familyLocations} />
            </Button>
            <Flex as="ul" variant="subNav" flexDirection="column">
              {familyLocations &&
                familyLocations.map(loc => (
                  <Box key={loc.name} as="li" variant="subNavItem">
                    <Text
                      display="block"
                      px={4}
                      py={2}
                      as={Link}
                      to={`${Pages.location}${loc.name
                        .toLowerCase()
                        .replace(/ /g, '_')}`}
                    >
                      {loc.name}
                    </Text>
                  </Box>
                ))}
            </Flex>
          </Box>
          <Box as="li" variant="navItem">
            <Button variant="link" as={Link} to={Pages.home}>
              <FormattedMessage {...messages.adultLocations} />
            </Button>
            <Flex as="ul" variant="subNav" flexDirection="column">
              {adultLocations &&
                adultLocations.map(loc => (
                  <Box key={loc.name} as="li" variant="subNavItem">
                    <Text
                      display="block"
                      px={4}
                      py={2}
                      as={Link}
                      to={`${Pages.location}${loc.name
                        .toLowerCase()
                        .replace(/ /g, '_')}`}
                    >
                      {loc.name}
                    </Text>
                  </Box>
                ))}
            </Flex>
          </Box>
          <Box as="li">
            <Button variant="link" as={Link} to={Pages.thingsToDo}>
              <FormattedMessage {...messages.thingToDo} />
            </Button>
          </Box>
          <Box as="li">
            <Button variant="link" as={Link} to={Pages.memberBenefits}>
              <FormattedMessage {...messages.memberBenefits} />
            </Button>
          </Box>
          <Box mx="auto" as="li" />
          <Box as="li">
            <Button
              variant="invertLink"
              fontWeight="bold"
              as={Link}
              to={Pages.book}
            >
              <FormattedMessage {...messages.book} />
            </Button>
          </Box>
          <Box as="li">
            <LocaleToggle />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Header;
