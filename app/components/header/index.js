import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Flex, Box, Button, Image, Text } from 'rebass';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import messages from './messages';
import LocaleToggle from '../../containers/localeToggle';
import { Pages } from '../../containers/main/constants';
import { makeSelectAdultLocation, makeSelectFamilyLocation } from '../../containers/resorts/selectors';

function Header() {
  const { formatMessage } = useIntl();
  const familyLocations = useSelector(makeSelectFamilyLocation);
  const adultLocations = useSelector(makeSelectAdultLocation);
  return (
    <Flex bg="white">
      <Link to={Pages.home}>
        <Image
          p={3}
          pt={0}
          bg="black"
          src="https://www.moonpalace.com/themes/custom/mooncancun/images/logo.png"
          alt={formatMessage(messages.navImage.text)}
        />
      </Link>
      <Box sx={{ zIndex: 999999 }} variant="container" as="nav">
        <Flex alignItems="center" as="ul">
          <Box as="li" variant="navItem">
            <Button variant="link" as={Link} to={Pages.family}>
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
                      to={Pages.dynamicLocation(loc.name)}
                    >
                      {loc.name}
                    </Text>
                  </Box>
                ))}
            </Flex>
          </Box>
          <Box as="li" variant="navItem">
            <Button variant="link" as={Link} to={Pages.adult}>
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
                      to={Pages.dynamicLocation(loc.name)}
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
