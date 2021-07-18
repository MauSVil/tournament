import React from 'react';
import {
  Link
} from "react-router-dom";
import Text from '../Text/Text';
import Button from '../Button/Button';
import './HomeSection.css'

const HomeSection = (props) => {
  const {
    title,
    description,
    img,
    to,
    light,
    inverted
  } = props;

  return (
    <div
      className={light
        ? "homeSection-root"
        : "homeSection-root background-dark"
      }
    >
      <div
        className={!inverted
          ? "homeSection-container"
          : "homeSection-container container-inverted"
        }
      >
        <div className="homeSection-col">
          <div className="homeSection-titleContainer">
            <Text
              textSize="text--large"
              variant="h2"
              textColor={light ? "secondary" : "primary"}
            >
              {title}
            </Text>
          </div>
          <div className="homeSection-descContainer">
            <Text
              textColor={light ? "secondary" : "primary"}
            >
              {description}
            </Text>
          </div>
          <Link to={to}>
            <Button
              styleClass="btn--primary"
              colorClass="blue"
              sizeClass="btn--large"
            >
              Go
            </Button>
          </Link>
        </div>
        <div className="homeSection-col">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
};

export default HomeSection;
