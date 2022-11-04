import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';

const Testimonial = ({ className, userName, userImage, comment }) => {
  return (
    <div className={className}>
      <div className="img-wrapper">
        <img src={userImage} alt="user" />
      </div>
      <div>
        <h3>{userName}</h3>
        <p>{comment}</p>
        <Stars />
        <i class="fa-solid fa-quote-left"></i>
      </div>
    </div>
  );
};

export default styled(Testimonial)`
  padding: 30px 40px 30px 0;
  border-radius: 120px;
  background-color: #fff;
  box-shadow: 0 10px 20px 0 rgb(0 5 50 / 10%);
  display: flex;
  position: relative;
  margin-bottom: 2em;

  @media only screen and (min-width: 600px) {
    width: 490px;
    margin-bottom: 0;
  }

  img {
    width: 100px;
    height: 100px;
    aspect-ratio: 1;
    border-radius: 50%;
    margin-right: 0.5em;
    padding: 0.8em;
    box-sizing: initial;
    transform: translateX(-1em);
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
    display: block;
  }

  i.fa-quote-left {
    font-size: 4rem;
    transform: rotate(180deg) translateY(50%);
    color: #cfd8e8;
    position: absolute;
    top: 0;
    right: 100px;
  }
`;
