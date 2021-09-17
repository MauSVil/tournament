import React from 'react';
import clsx from 'clsx';
import './LandingPage.css'

const LandingPage = (props) => {
  const { open, setOpen } = props

  const handleClick = () => {
    setOpen(false);
  }

  const rootClass = clsx(
    "landingPage-root", {
      "landingPage-rootClosed": !open
    }
  )

  const imageClass = clsx(
    "landingPage-logo", {
      "landingPage-opacityClosed": !open
    }
  );

  const buttonClass = clsx(
    "landingPage-startButton", {
      "landingPage-opacityClosed": !open
    }
  )

  return (
    <div className={rootClass}>
      <img alt="" src="/static/LogoBY.svg" className={imageClass} />
      <button
        className={buttonClass}
        onClick={handleClick}
      >
        COMENCEMOS
      </button>
    </div>
  );
};

export default LandingPage;