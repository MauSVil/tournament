import React from 'react';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const COLORS = ['primary', 'blue', 'red', 'green'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const Button = (props) => {
  const {
    children,
    colorClass,
    sizeClass,
    styleClass,
    onClick
  } = props;

  const validateStyleClass = STYLES.includes(styleClass) ? styleClass : STYLES[0]
  const validateSizesClass = SIZES.includes(sizeClass) ? sizeClass : SIZES[0]
  const validateColorClass = COLORS.includes(colorClass) ? colorClass : null

  return (
    <button
      onClick={onClick}
      className={`button ${validateStyleClass} ${validateColorClass} ${validateSizesClass}`}
    >
      {children}
    </button>
  )
}

export default Button;
