import React from 'react';
import styled from 'styled-components';

const Title = ({ className, title }) => {
  return (
    <div className={className}>
      <div className="recs">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>{title}</div>
    </div>
  );
};

export default styled(Title)`
  display: flex;
  align-items: center;
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')};
  font-family: 'Circular Std Book';
  font-weight: 600;
  margin-bottom: 1em;

  .recs {
    width: 40px;
    height: 35px;
    position: relative;
    transform: translateY(5px);
    margin-right: 1em;

    div {
      position: absolute;
    }

    div:nth-child(1) {
      top: -8px;
      width: 5px;
      height: 5px;
      left: 20px;
      background-color: #4ce7f3;
    }

    div:nth-child(2) {
      width: 10px;
      left: 28px;
      height: 10px;
      background-color: #4ce7f3;
    }

    div:nth-child(3) {
      height: 17px;
      width: 17px;
      background-color: #7c0dbe;
    }

    div:nth-child(4) {
      top: 10px;
      left: 10px;
      width: 12px;
      height: 12px;
      background-color: #ff00d6;
    }
  }
`;
