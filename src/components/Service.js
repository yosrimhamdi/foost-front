import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Service = ({ className, title, description, icon }) => {
  return (
    <div className={className}>
      <div className="description">
        <h3>{title}</h3>
        <p>{description} </p>
      </div>
      <Icon icon={icon} />
    </div>
  );
};

export default styled(Service)`
  text-align: right;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: initial;
  position: relative;
  cursor: pointer;
  margin-bottom: 2em;


  @media only screen and (min-width: 600px) {
      width: 500px;
    &:last-child {
      transform: translateX(100px);
    }
  }
 

  .description {
    margin-right: 4em;
  }

  h3 {
    margin-bottom: 0.8em;
  }

    &:hover .icon-wrapper {
      background: #fff;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:hover .icon::after {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;
