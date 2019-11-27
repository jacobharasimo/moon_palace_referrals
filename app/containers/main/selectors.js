/**
 * The global state selectors
 */
import { unionBy } from 'lodash';

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

export const makeSelectLocation = () =>
  createSelector(
    makeSelectAdultLocation,
    makeSelectFamilyLocation,
    (adultLocations, familyLocation) => {
      return unionBy(adultLocations, familyLocation, 'name');
    },
  );
