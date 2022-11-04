import React from 'react';
import styled from 'styled-components';

const Map = ({ className, location }) => {
  return (
    <div className={className}>
      <div className="img-container">
        <img
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
            location ? location.country : ''
          }.svg`}
          alt="tn flag"
        />
      </div>
      <h2>Local To {location && location.city}</h2>
      <p>
        We work with influencers local to {location && location.city} to get you
        the best regional exposure.
      </p>
    </div>
  );
};

export default styled(Map)`
  background-color: #e9ebf7;
  border-radius: 20px;
  padding: 3em 1em;
  cursor: pointer;

  @media only screen and (min-width: 600px) {
    width: 250px;
  }

  &:hover {
    background-color: #fff;
    box-shadow: 0 25px 38px 0 rgb(43 1 68 / 17%);
    transition: 0.3s all ease-in-out;
  }

  .img-container {
    background-color: #fff;
    margin: 0 auto;
    width: 40%;
    border-radius: 25px;
    box-shadow: -0.707px 0.707px 10px 0 rgb(43 1 68 / 10%);
    margin-bottom: 2em;
  }

  img {
    width: 100%;
    display: block;
    padding: 1em 0.5em;
  }

  p {
    font-size: 0.9rem;
  }
`;
