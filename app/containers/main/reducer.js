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
      markerOffsetX: 6,
      markerOffsetY: 0,
      name: 'The Grand',
      country: 'Mexico',
      coordinates: [-86.8332659, 21.1],
    },
    {
      markerOffsetX: 6,
      markerOffsetY: -2,
      name: 'Beach Palace',
      country: 'Mexico',
      coordinates: [-86.7614022, 21.1138692],
    },
    {
      markerOffsetX: -5,
      markerOffsetY: -2,
      name: 'Sun Palace',
      country: 'Mexico',
      coordinates: [-86.7846934, 21.0441773],
    },
    {
      markerOffsetX: -6.5,
      markerOffsetY: 0,
      name: 'Cancun Palace',
      country: 'Mexico',
      coordinates: [-86.8332659, 21.1],
    },
    {
      markerOffsetX: 7,
      markerOffsetY: 0.5,
      name: 'Cozumel Palace',
      country: 'Mexico',
      coordinates: [-86.9613826, 20.5030593],
    },
    {
      markerOffsetX: 6,
      markerOffsetY: 2.9,
      name: 'Playacar Palace',
      country: 'Mexico',
      coordinates: [-87.0794957, 20.620387],
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
      markerOffsetX: -9,
      markerOffsetY: 2.25,
      name: 'Isla Mujeres Palace',
      country: 'Mexico',
      coordinates: [-86.738323, 21.2283223],
    },
    {
      markerOffsetX: 9,
      markerOffsetY: 0.5,
      name: 'Le Blanc - Los Cabos',
      country: 'Jamaica',
      coordinates: [-109.787656, 22.9715083],
    },
    {
      markerOffsetX: -8.5,
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
