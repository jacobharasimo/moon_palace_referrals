/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  familyLocations: [
    {
      markerOffsetX: 7.5,
      markerOffsetY: 0.5,
      name: 'The Grand',
      country: 'Mexico',
      coordinates: [-86.8332659, 21.1],
    },
    {
      markerOffsetX: -11,
      markerOffsetY: 0.5,
      name: 'Cancun Palace',
      country: 'Mexico',
      coordinates: [-86.8332659, 21.1],
    },
    {
      markerOffsetX: 8,
      markerOffsetY: -2,
      name: 'Beach Palace',
      country: 'Mexico',
      coordinates: [-86.7614022, 21.2538692],
    },
    {
      markerOffsetX: -9,
      markerOffsetY: -1.5,
      name: 'Sun Palace',
      country: 'Mexico',
      coordinates: [-86.7846934, 21.4441773],
    },
    {
      markerOffsetX: -11,
      markerOffsetY: 1.3,
      name: 'Playacar Palace',
      country: 'Mexico',
      coordinates: [-87.3794957, 20.220387],
    },
    {
      markerOffsetX: 11,
      markerOffsetY: 2,
      name: 'Cozumel Palace',
      country: 'Mexico',
      coordinates: [-86.9613826, 20.5030593],
    },
    {
      markerOffsetX: 0,
      markerOffsetY: 2.5,
      name: 'Jamaica Grande',
      country: 'Jamaica',
      coordinates: [-77.1072127, 18.410321],
    },
    // {
    //   markerOffsetX: -7,
    //   markerOffsetY: 2,
    //   name: 'Punta Cana Grande',
    //   country: 'Dominican Republic',
    //   coordinates: [-68.35537, 18.7418017],
    // },
  ],
  adultLocations: [
    {
      markerOffsetX: -14,
      markerOffsetY: 2.25,
      name: 'Isla Mujeres Palace',
      country: 'Mexico',
      coordinates: [-86.738323, 21.2283223],
    },
    {
      markerOffsetX: 14,
      markerOffsetY: 0.5,
      name: 'Le Blanc - Los Cabos',
      country: 'Mexico',
      coordinates: [-109.787656, 22.9715083],
    },
    {
      markerOffsetX: -14,
      markerOffsetY: 4,
      name: 'Le Blanc - Cancun',
      country: 'Mexico',
      coordinates: [-86.7551234, 21.1260383],
    },
  ],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
