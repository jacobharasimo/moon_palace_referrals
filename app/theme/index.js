import baseTheme from '@rebass/preset';
import { merge } from 'lodash';

const customTheme = {
  colors: {},
  buttons: {
    invertLink: {
      borderRadius: 0,
      backgroundColor: 'black',
      color: 'white',
      ':hover': {
        backgroundColor: 'primary',
      },
    },
    link: {
      borderRadius: 0,
      backgroundColor: 'transparent',
      color: 'black',
      ':hover': {
        backgroundColor: 'gray',
      },
    },
  },
  variants: {
    primaryButton: {
      background: 'blue',
      color: 'white',
    },
    container: {
      maxWidth: '960px',
      margin: 'auto',
      width: '100%',
      display: 'block',
    },
    unstyledList: {
      listStyle: 'none',
      padding: 0,
    },
    navList: {
      listStyle: 'none',
      padding: 0,
    },
    subNav: {
      padding: 0,
      listStyle: 'none',
      position: 'absolute',
    },
    navItem: {
      cursor: 'pointer',
      ':hover, :focus': {
        '> ul': {
          display: 'block',
        },
      },
      '> ul': {
        display: 'none',
      },
    },
    subNavItem: {
      cursor: 'pointer',
      backgroundColor: 'rgba(255,255,255,.9)',
      color: 'black',
      a: {
        color: 'inherit',
        textDecoration: 'none',
        ':hover': {
          backgroundColor: 'gray',
        },
      },
    },
  },
};
const theme = merge(baseTheme, customTheme);

Object.keys(theme.buttons).forEach(key => {
  theme.buttons[key].cursor = 'pointer';
  theme.buttons[key].transition =
    'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out';
});

// eslint-disable-next-line no-console
console.log(theme);
export default theme;
