import React from 'react';
import { withStyles } from 'react-jss';
import styles from '../styles';

// eslint-disable-next-line import/prefer-default-export
export const themed = (path, Component) => {
  const pathArray = path.split('.');
  return (
    withStyles(styles[pathArray[0]][pathArray[1]])(
      // eslint-disable-next-line react/jsx-props-no-spreading
      (props) => <Component {...props} />,
    ));
};