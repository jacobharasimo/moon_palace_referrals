import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Button } from 'rebass';
import { Link } from 'react-router-dom';
import { MapChart } from '../map';
import { Pages } from '../../containers/main/constants';

const SelectableMap = ({ fontSize, locations, history, zoom, center }) => {
  const onMarkerClick = marker => {
    history.push(Pages.dynamicLocation(marker.name));
  };
  return (
    <Flex flexDirection="column">
      <Box>
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
            <MapChart
              fontSize={fontSize}
              zoom={zoom}
              center={center}
              onSelectMarker={onMarkerClick}
              markers={locations}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

SelectableMap.propTypes = {
  fontSize: PropTypes.number,
  zoom: PropTypes.number,
  center: PropTypes.arrayOf(PropTypes.number),
  locations: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

SelectableMap.defaultProps = {
  fontSize: 16,
  zoom: 7,
  center: [-89, 22],
  locations: null,
};

export { SelectableMap };
