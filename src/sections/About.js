import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import Testimonial from '../components/Testimonial';
import Title from '../components/Title';

const About = ({ className }) => {
  return (
    <div className={className}>
      <Title title="Testimonials" centered />
      <Headline boldText="What do customers say" normalText="about Foost?" />
      <div className="testimonials-wrapper">
        <Testimonial
          userName="Will V"
          userImage="https://foost.io/landing-aug-22/wp-content/uploads/2022/08/3.png"
          comment="I'm so glad I found Foost! Before I had to spend hours on my page every day. It's been a huge time saver. Super awesome."
        />
        <Testimonial
          userName="Laura A"
          userImage="https://foost.io/landing-aug-22/wp-content/uploads/2022/08/4.png"
          comment="These guys are mindblowing! They care about every follower and provide top notch support."
        />
      </div>
    </div>
  );
};

export default styled(About)`
  text-align: center;
  background-color: rgb(236, 238, 246);
  background-image: url(https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/tbg.png);
  padding: 2em 1em;

  .testimonials-wrapper {
  }

  @media only screen and (min-width: 600px) {
    .testimonials-wrapper {
      margin-top: 7em;
      margin-bottom: 7em;
      gap: 3em;
      display: flex;
      justify-content: center;
    }
  }
`;
