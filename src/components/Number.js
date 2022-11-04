import React from 'react';
import styled from 'styled-components';

const Number = ({ className, number, description }) => {
  return (
    <div className={className}>
      <h1>{number}+</h1>
      <p>{description}</p>
    </div>
  );
};

export default styled(Number)`
  width: 50%;
  text-align: center;

  h1 {
    color: ${({ color }) => color};
    font-size: 4rem;
    font-weight: 500;
  }

  p {
    font-size: 1.5rem;
  }
`;
