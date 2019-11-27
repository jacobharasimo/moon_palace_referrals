import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Button } from 'rebass';
import { MapChart } from '../map';

export const SelectableMap = ({
  locations,
  onLocationSelect,
}) => (
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
              <Button width={1} onClick={() => onLocationSelect(marker)}>
                {marker.name}
              </Button>
            </Box>
          ))}
        </Flex>
      )}
    </Box>
    <Box width={2 / 3}>
      <MapChart onSelectMarker={onLocationSelect} markers={locations} />
    </Box>
  </Flex>
);

SelectableMap.propTypes = {
  locations: PropTypes.array,
  onLocationSelect: PropTypes.func.isRequired,
};

SelectableMap.defaultProps = {
  locations: null,
};
