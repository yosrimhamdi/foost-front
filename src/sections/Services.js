import styled from 'styled-components';
import Service from '../components/Service';

const Services = ({ className }) => {
  return (
    <div className={className}>
      <img
        src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/s-shape3.png"
        alt="shape"
        className="shape"
      />
      <img
        src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/s-shape4.png"
        alt="shape"
        className="center-shape"
      />
      <div className="content">
        <img
          src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/s-shape5.png"
          alt="shape"
          className="circle"
        />
        <Service
          title="Glitch Free Growth"
          description="Foost works perfectly for all types of accounts , from fitness influencers to musicians."
          icon="fa-bug"
        />
        <Service
          title="Rapid Popularity"
          description="Foost pushes your profile to the limit. We generate more followers than anyone else can."
          icon="fa-newspaper"
        />
        <Service
          title="Helps You Get Verified"
          description="By growing your audience, foost accelerates the official recognition of your brand."
          icon="fa-user-check"
        />
      </div>
    </div>
  );
};

export default styled(Services)`
  background-color: #eceef6;
  position: relative;
  overflow: hidden;

  .content {
    padding: 1em;
    position: relative;
    z-index: 1;
  }

  .center-shape,
  .circle,
  &::before,
  &::after {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    .content {
      width: 50%;
      margin: 0 auto;
      padding: 4em 0;
    }

    .center-shape,
    .circle,
    &::before,
    &::after {
      display: initial;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url(https://foost.to/landing-aug-22/wp-content/themes/appilo/img/app-showcase/shape/s-shape2.png);
  }

  &::after {
    top: -5px;
    right: 0;
    content: '';
    height: 640px;
    width: 780px;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://foost.to/landing-aug-22/wp-content/themes/appilo/img/app-showcase/shape/s-shape1.png);
  }

  .shape {
    transform: translate3d(-20.444px, 0px, 0px) rotateX(0deg) rotateY(0deg)
      rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
    left: -95px;
    bottom: -15px;
    position: absolute;
  }

  .center-shape {
    position: absolute;
    top: 50%;
    left: 40%;
    right: 0;
    transform: translateY(-50%);
  }

  .circle {
    top: -180px;
    left: 450px;
    width: 678px;
    height: 678px;
    position: absolute;
  }
`;
