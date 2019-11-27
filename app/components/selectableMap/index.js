import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Button } from 'rebass';
import { Link, withRouter } from 'react-router-dom';
import { MapChart } from '../map';
import { Pages } from '../../containers/main/constants';

const SelectableMap = ({ locations, history }) => {
  const onMarkerClick = marker => {
    history.push(Pages.dynamicLocation(marker.name));
  };
  return (
    <Flex>
      <Box width={1 / 3} p={2} pt={0}>
        {locations && (
          <Flex
            as="ul"
            variant="unstyledList"
            flexDirection="column"
            maxHeight={500}
            overflow="auto"
          >
            {locations.map(marker => (
              <Box key={marker.name} as="li" width={1} py={1} pt={0}>
                <Button
                  width={1}
                  as={Link}
                  to={Pages.dynamicLocation(marker.name)}
                >
                  {marker.name}
                </Button>
              </Box>
            ))}
          </Flex>
        )}
      </Box>
      <Box width={2 / 3}>
        <MapChart onSelectMarker={onMarkerClick} markers={locations} />
      </Box>
    </Flex>
  );
};

SelectableMap.propTypes = {
  locations: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

SelectableMap.defaultProps = {
  locations: null,
};

const withRoute = withRouter(SelectableMap);

export { withRoute as SelectableMap };
