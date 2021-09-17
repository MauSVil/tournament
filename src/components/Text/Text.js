import React from 'react';
import './Text.css'

const SIZES = ['text--medium', 'text--small', 'text--large'];

const COLORS = ['primary', 'secondary', 'disabled'];

const variantValidation = (variant, children, validateColorClass, validateSizeClass, className) => {
  switch (variant) {
    case 'h1':
      return <h1 className={`text ${validateColorClass} ${validateSizeClass} ${className}`}>{children}</h1>
    case 'h2':
      return <h2 className={`text ${validateColorClass} ${validateSizeClass} ${className}`}>{children}</h2>
    case 'h3':
      return <h3 className={`text ${validateColorClass} ${validateSizeClass} ${className}`}>{children}</h3>
    case 'h4':
      return <h4 className={`text ${validateColorClass} ${validateSizeClass} ${className}`}>{children}</h4>
    default:
      return <p className={`text ${validateColorClass} ${validateSizeClass} ${className}`}>{children}</p>
  }
}

const Text = (props) => {
  const {
    variant,
    children,
    textColor,
    textSize,
    className
  } = props;

  const validateColorClass = COLORS.includes(textColor) ? textColor : 'inhereit'
  const validateSizeClass = SIZES.includes(textSize) ? textSize : 'inherit'

  return variantValidation(
    variant,
    children,
    validateColorClass,
    validateSizeClass,
    className
  );
}

export default Text;
