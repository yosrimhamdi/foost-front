import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Title from '../components/Title';
import Map from '../components/Map';
import Button from '../components/Button';
import bgImage from '../assets/featured-services-bg-img.png';

const FeaturedServices = ({ className }) => {
  const [location, setLocation] = useState(null);
  console.log(location);
  useEffect(() => {
    const getUserLocation = async () => {
      const response = await axios.get(
        'https://ipinfo.io/json?token=de0df691d43fd4'
      );

      setLocation(response.data);
    };
    getUserLocation();
  }, []);

  return (
    <div className={className}>
      <div className="container">
        <Title title="Featured Services" centered />
        <h2>For {location && location.city} Only</h2>
        <p>
          We specialize in obtaining key followers for users in and around{' '}
          {location && location.city}. Our {location && location.city}-based
          support team works with you to network with the most popular{' '}
          {location && location.city} influencers.
        </p>
        <div className="maps-container">
          <Map location={location} />
          <Map location={location} />
        </div>
        <Button text="Start Now" color="white" />
      </div>
    </div>
  );
};

export default styled(FeaturedServices)`
  background-image: url(${bgImage});
  background-position: 100% 178px;
  background-repeat: no-repeat;

  .container {
    padding: 1em;
    text-align: center;
  }

  .maps-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
  }

  h2 {
    margin-bottom: 0.5em;
  }

  p > {
    line-height: 2;
    margin-bottom: 3em;
  }

  @media only screen and (min-width: 600px) {
    .container {
      width: 28%;
      margin: 0 auto;
      padding: 4em 0;
    }

    .maps-container {
      flex-wrap: nowrap;
    }
  }
`;
