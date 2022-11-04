import { useState } from 'react';
import styled from 'styled-components';

import Details from '../components/Details';
import Title from '../components/Title';

const FAQ = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={className}>
      <img
        src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fq-shape6.png"
        alt="lines"
        class="shape-lines"
      />
      <img
        src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fq-shape4.png"
        alt="lines"
        class="shape-circle-right"
      />
      <img
        src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fq-shape1.png"
        alt="lines"
        class="shape-circle-red"
      />
      <img
        src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fq-shape2.png"
        alt="lines"
        class="shape-moving-cirlce"
      />
      <img
        src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fq-shape3.png"
        alt="lines"
        class="shape-circle-blue"
      />
      <div className="recss">
        <img
          src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fq-shape7.png"
          alt=""
        />
        <img
          src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fq-shape7.png"
          alt=""
        />
        <img
          src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fq-shape7.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="top">
          <div>
            <Title title="Frequently Asked Questions" />
            <h1>What do people commonly ask about Foost?</h1>
          </div>
          <p>The most common questions that we receive are noted below</p>
        </div>
        <Details
          summary="Do I need to provide my password?"
          description="No. Some services ask for your password after you signup. Foost works with no password required."
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Details
          summary="Is this platform secure?"
          description="All users payment information is protected by stripe's 256 bit encryption. This standard is the most secure available."
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Details
          summary="Can I cancel my account?"
          description="You can cancel your account quickly and easily at anytime. No questions asked. We also offer a money back guarantee."
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Details
          summary="Can I add more than one profile?"
          description="Yes you can grow as many Instagram accounts as you like. Our platform is capable of expanding more than one account simultaneously."
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default styled(FAQ)`
  background-color: #eceef6;
  margin-bottom: 1em;
  position: relative;
  overflow: hidden;

  .container {
    padding: 1em;
    position: relative;
    z-index: 2;
  }

  .top {
    margin-bottom: 3em;
  }

  @media only screen and (min-width: 600px) {
    .container {
      margin: 0 auto;
      margin-bottom: 2.5em;
      padding: 4em 0;
      width: 50%;
    }

    .top {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .shape-lines {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .shape-circle-right {
    transform: translate3d(0px, 40.156px, 0px) rotateX(0deg) rotateY(0deg)
      rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
    position: absolute;
    top: 25%;
    right: 165px;
  }

  .shape-circle-red {
    transform: translate3d(40.265px, 0px, 0px) rotateX(0deg) rotateY(0deg)
      rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
    top: -70px;
    left: 140px;
    z-index: 2;
    position: absolute;
  }

  .shape-moving-cirlce {
    position: absolute;
    top: -70px;
    left: 75px;
    z-index: 1;
    opacity: 0.4;
    animation: spining 35s linear infinite;
  }

  @keyframes spining {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .shape-circle-blue {
    top: 50%;
    left: 165px;
    transform: translateX(-50%);
    animation: 3s ease 0s infinite alternate none running scale;
    position: absolute;

    @keyframes scale {
      from {
        transform: scale(0.9);
        -webkit-transform: scale(0.9);
      }
      to {
        transform: scale(1.08);
        -webkit-transform: scale(1.08);
      }
    }
  }
  .recss {
    top: 65px;
    right: 20%;
    position: absolute;

    img {
      display: block;
      margin-bottom: 0.5em;
      animation: spining 5s linear infinite;
    }
  }
`;
