/**
 * The global state selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectGlobal = state => state.global || initialState;

export const makeSelectFamilyLocation = createSelector(
  selectGlobal,
  routerState => routerState.familyLocations,
);

export const makeSelectAdultLocation = createSelector(
  selectGlobal,
  routerState => routerState.adultLocations,
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
