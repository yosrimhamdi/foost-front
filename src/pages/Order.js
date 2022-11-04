import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Order = ({ className }) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const onButtonClick = async () => {
    if (!email || !userName) {
      return alert('email and Instagram username are required');
    }

    try {
      await axios.post('https://foost123.herokuapp.com/', { email, userName });
      alert('Email sent!!');
    } catch (e) {
      alert('Ouups. something went wrong');
    }
  };

  return (
    <div className={className}>
      <div className="container">
        <h1>CONTACT INFORMATION</h1>
        <label>Email Adress</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <h1>INSTAGRAM INFORMATION</h1>
        <label>Instagram Username</label>
        <input
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <button onClick={onButtonClick}>place my order</button>
      </div>
    </div>
  );
};

export default styled(Order)`
  .container {
    padding: 1em;
  }

  @media only screen and (min-width: 600px) {
    .container {
      padding: 2em;
      width: 50%;
    }
  }

  h1 {
    color: #5a7396;
    margin-bottom: 0.5em;
    font-size: 1.8rem;
  }

  label {
    color: #81858a;
    display: block;
    margin-bottom: 0.5em;
  }

  input {
    display: block;
    width: 100%;
    padding: 1em 1em;
    border: 1px solid grey;
    border-radius: 5px;
  }

  button {
    background-color: #ff00d6;
    color: white;
    display: block;
    width: 100%;
    padding: 1rem 0;
    border-radius: 50px;
    border-top-right-radius: 0;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2em;
    cursor: pointer;
    transition: all 300ms;

    &:hover {
      background-color: #009cff;
      border-top-right-radius: 50px;
      border-bottom-left-radius: 0;
    }
  }
`;
