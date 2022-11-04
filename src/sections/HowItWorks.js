import styled from 'styled-components';

import Card from '../components/Card';
import Headline from '../components/Headline';
import Title from '../components/Title';

const HowItWorks = ({ className }) => {
  return (
    <div className={className}>
      <img
        src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/hws.png"
        alt=""
        className="bg"
      />
      <div className="container">
        <Title title="How does it work?" />
        <Headline
          boldText="Our growth process is the most advanced"
          normalText="in the industry."
        />
        <div className="cards-wrapper">
          <Card
            title="Analyze Your Profile"
            description="Your profile is assessed by our in-house experts using state of the art machine learning."
            icon="fa-user-check"
          />
          <Card
            title="Inbound Data"
            description="We gather volumes of information from Instagram to identify the best followers to target."
            icon="fa-download"
          />
          <Card
            title="Metadata Matching"
            description="We compare your profile to 100,000+ Instagram assets and target the best profiles and interact with the optimal selections."
            icon="fa-database"
          />
          <Card
            title="Inbound Interactions"
            description="Your new followers will message you with new communications to solidify you and expand your network."
            icon="fa-t"
          />
          <Card
            title="Thrive"
            description="As a newly minted influencer amongst Instagram elite, you will hold a status reserved only for select few."
            icon="fa-user-check"
          />
        </div>
      </div>
    </div>
  );
};

export default styled(HowItWorks)`
  position: relative;

  .container {
    padding: 1em;
    list-style-type: none;
    counter-reset: css-counter 0;
  }

  @media only screen and (min-width: 1200px) {
    .container {
      width: 500px;
      margin-left: 500px;
      padding: 4em 0;
    }
  }

  .cards-wrapper {
    height: 300px;
    overflow-y: scroll;
    padding: 0 2em;
    background-color: #fff;

    &::-webkit-scrollbar {
      width: 13px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 15px;
      background-color: #e8e9f3;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #7c0dbe;
      border-radius: 15px;
    }
  }

  .bg {
    height: auto;
    max-width: 100%;
    /* top: -185px; */
    /* bottom: 0; */
    z-index: -1;
    left: 0;
    position: absolute;
  }
`;
