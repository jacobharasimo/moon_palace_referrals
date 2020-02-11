import React from 'react';
import PropTypes from 'prop-types';
import { geoCentroid } from 'd3-geo';
import {
  ComposableMap,
  Geographies,
  Annotation,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import geoUrl from './world-110m.json';

const offsets = {
  JAM: [14, -12],
  HTI: [4, -7],
  DOM: [0.5, -4],
  PRI: [5, 5],
};

const MapChart = ({
  markers,
  height,
  width,
  zoom,
  center,
  disablePanning,
  disableZooming,
  onSelectMarker,
  fontSize,
}) => {
  if (!markers) {
    return null;
  }
  return (
    <ComposableMap projection="geoMercator" height={height} width={width}>
      <ZoomableGroup
        disableZooming={disableZooming}
        disablePanning={disablePanning}
        zoom={zoom}
        center={center}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map(geo => (
                <Geography
                  data-iso={geo.properties.ISO_A3}
                  className={geo.properties.NAME}
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none',
                      stroke: 'white',
                      strokeWidth: '.1px',
                    },
                    hover: {
                      fill: '#D6D6DA',
                      outline: 'none',
                      stroke: 'white',
                      strokeWidth: '.1px',
                    },
                    pressed: {
                      fill: '#D6D6DA',
                      outline: 'none',
                      stroke: 'white',
                      strokeWidth: '.1px',
                    },
                  }}
                />
              ))}
              {geographies.map(geo => {
                const centroid = geoCentroid(geo);
                const cur = geo.properties;
                return (
                  <g key={`${geo.rsmKey}-name`}>
                    {cur &&
                      (Object.keys(offsets).indexOf(cur.ISO_A3) === -1 ? (
                        <Marker coordinates={centroid}>
                          <text
                            style={{
                              fontFamily: 'system-ui',
                              fontSize: `${fontSize * 0.875}px`,
                              textAlign: 'right',
                              fill: '#5D5A6D',
                            }}
                            textAnchor="middle"
                          >
                            {cur.NAME}
                          </text>
                        </Marker>
                      ) : (
                        <Annotation
                          strokeWidth=".15"
                          subject={centroid}
                          dx={offsets[cur.ISO_A3][0]}
                          dy={offsets[cur.ISO_A3][1]}
                        >
                          <text
                            x={0.25}
                            style={{
                              fontFamily: 'system-ui',
                              fontSize: `${fontSize * 0.875}px`,
                              textAlign: 'right',
                              fill: '#5D5A6D',
                            }}
                            alignmentBaseline="middle"
                          >
                            {cur.NAME}
                          </text>
                        </Annotation>
                      ))}
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
        {markers &&
          markers.map(marker => (
            <Marker
              key={marker.name}
              style={{
                hover: { cursor: 'pointer' },
              }}
              coordinates={marker.coordinates}
              onClick={() => {
                onSelectMarker(marker);
              }}
            >
              <circle r={0.75} fill="#F00" stroke="#fff" strokeWidth={0.25} />
              <text
                textAnchor="middle"
                y={marker.markerOffsetY}
                x={marker.markerOffsetX}
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'system-ui',
                  fontSize: `${fontSize}px`,
                  textAlign: 'right',
                  fill: '#5D5A6D',
                }}
              >
                {marker.name}
              </text>
            </Marker>
          ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

MapChart.propTypes = {
  markers: PropTypes.array,
  height: PropTypes.number,
  width: PropTypes.number,
  zoom: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  disablePanning: PropTypes.bool,
  disableZooming: PropTypes.bool,
  onSelectMarker: PropTypes.func.isRequired,
};

MapChart.defaultProps = {
  markers: null,
  height: 600,
  width: 800,
  disablePanning: true,
  disableZooming: true,
};

export { MapChart };
