import React from 'react';
import styled from 'styled-components';

const PricePlan = ({ className, title, price }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <h1>${price}</h1>
      <p>TODAY ONLY - ${price}/MONTH</p>
      <div className="list">
        <div>
          <i class="fa-solid fa-check"></i> Rapid Follower Gains
        </div>
        <div>
          <i class="fa-solid fa-check"></i> Premier Customer Service
        </div>
        <div>
          <i class="fa-solid fa-xmark"></i> Advanced Email Support
        </div>
        <div>
          <i class="fa-solid fa-xmark"></i> IG-Specific Platforming
        </div>
        <div>
          <i class="fa-solid fa-xmark"></i> Second Tier IG Control
        </div>
        <div>
          <i class="fa-solid fa-xmark"></i> 1v1 Support
        </div>
        <div>
          <i class="fa-solid fa-xmark"></i> Independent Growth
        </div>
      </div>
      <div className="btn-wrapper">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default styled(PricePlan)`
  box-shadow: 0 0 25px rgb(0 0 0 / 20%);
  width: 350px;
  text-align: center;
  border-radius: 7px;
  background-color: #fff;
  padding: 4em 0;
  transition: all 400ms;
  cursor: pointer;

  &:hover {
    background-color: #9127d3;
    color: white;
  }

  h1 {
    border-bottom: 1px solid #e8ddef;
    padding-bottom: 1em;
    margin-bottom: 1em;
  }

  p {
    margin-bottom: 1em;
  }

  .btn-wrapper {
    border-top: 1px solid #e8ddef;
    padding-top: 1.3em;
    margin-top: 3em;
  }

  .list {
    line-height: 2;

    > div:nth-child(even) {
      text-decoration: line-through;
    }
  }

  button {
    padding: 1.5em 3em;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    ${({ red, green, blue }) => {
      if (red) {
        return 'background-image: linear-gradient(to right, #fb8383 0, #f24548 100%);';
      }
      if (green) {
        return 'background-image: linear-gradient(to right, #77e34b 0, #31c551 100%);';
      }
      if (blue) {
        return 'background-image: linear-gradient(to right, #0084fd 0, #64d2ff 100%);';
      }
    }}

    &:hover {
      ${({ red, green, blue }) => {
        if (red) {
          return 'background-image: linear-gradient(to left, #fb8383 0, #f24548 100%);';
        }
        if (green) {
          return 'background-image: linear-gradient(to left, #77e34b 0, #31c551 100%);';
        }
        if (blue) {
          return 'background-image: linear-gradient(to left, #0084fd 0, #64d2ff 100%);';
        }
      }}
    }
  }
`;
