import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.resorts || initialState;

export const makeSelectFamilyLocation = createSelector(
  selectHome,
  routerState => routerState.adult.locations,
);

export const makeSelectAdultLocation = createSelector(
  selectHome,
  routerState => routerState.family.locations,
);

export const makeSelectSliders = resortType =>
  createSelector(
    selectHome,
    state => state[resortType].slides,
  );

export const makeSelectLocation = resortType =>
  createSelector(
    makeSelectAdultLocation,
    makeSelectFamilyLocation,
    (adultLocations, familyLocation) => {
      if (resortType === 'family') {
        return familyLocation;
      }
      return adultLocations;
    },
  );
