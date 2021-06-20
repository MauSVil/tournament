import _ from 'lodash';

const vars = {
  root: {
    backgroundColor_medium: 'green',
    padding_small: '20px 20px'
  },
  hamburgerMenu: {
    display_small: 'block'
  },
  links: {
    display_small: 'none'
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ screenSize }) => ({
  root: {
    width: '100%',
    height: '5rem',
    boxSizing: 'border-box',
    padding: _.get(vars, `root.padding_${screenSize}`,'20px 50px'),
    display: 'flex',
    alignItems : 'center',
    justifyContent: 'space-between',
    backgroundColor: _.get(vars, `root.backgroundColor_${screenSize}`, '#a79f9f')
  },
  hamburgerMenu: {
    display: _.get(vars, `hamburgerMenu.display_${screenSize}`, 'none'),
    flex: 1
  },
  links: {
    display: _.get(vars, `links.display_${screenSize}`, 'flex'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 2
  },
  signInContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})