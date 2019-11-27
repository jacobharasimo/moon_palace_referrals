/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  familyLocations: {
    id: `${scope}.locations.family`,
    defaultMessage: 'Family Resorts',
  },
  adultLocations: {
    id: `${scope}.locations.adult`,
    defaultMessage: 'Adult Resorts',
  },
  thingToDo: {
    id: `${scope}.thingsToDo`,
    defaultMessage: 'Things To Do',
  },
  memberBenefits: {
    id: `${scope}.memberBenefits`,
    defaultMessage: 'Member Benefits',
  },
  book: {
    id: `${scope}.book`,
    defaultMessage: 'Book',
  },
});
