import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ text, className }) => {
  return (
    <button className={className}>
      <i class="fa-sharp fa-solid fa-power-off"></i> {text}
    </button>
  );
};

export default styled(Button)`
  font-size: 15px;
  font-weight: 700;
  transition: 0.3s all ease-in-out;
  color: white;
  background-color: #ff00d6;
  border-radius: 50px;
  border-top-right-radius: 0;
  padding: 1.2em 2em;
  cursor: pointer;
  display: inline-flex;
  margin-bottom: 2em;
  margin-top: 3em;
  position: relative;

  &:hover {
    ${({ animated }) => {
      return (
        animated &&
        css`
          background-color: #009cff;
          border-top-right-radius: 50px;
          border-bottom-left-radius: 0;
        `
      );
    }}
  }
  i {
    color: ${color => {
      return color;
    }};
    font-size: 1.2rem;
    margin-right: 0.5em;
  }
`;
