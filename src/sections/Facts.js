import styled from 'styled-components';

import Title from '../components/Title';
import laptop from '../assets/laptop.png';
import Number from '../components/Number';
import Headline from '../components/Headline';

const Facts = ({ className }) => {
  return (
    <div className={className}>
      <img
        src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fns1.png"
        alt=""
        className="lines"
      />
      <div className="images-container">
        <img src={laptop} alt="laptop" class="laptop" />
        <img
          src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fmu2.png"
          alt="lp"
          class="left-image"
        />
        <img
          src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fmu3.png"
          alt="lp"
          class="right-image"
        />
        <img
          src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fc1.png"
          className="circle-left"
          alt=""
        />
        <img
          src="https://themexriver.com/appilo-theme/app-showcase/wp-content/uploads/sites/4/2021/07/fc2.png"
          className="circle-right"
          alt=""
        />
      </div>
      <div className="right">
        <Title title="Fun facts" />
        <Headline
          boldText="Here are few"
          normalText="fun facts about using Foost."
        />
        <p>
          Foost performs quantifiably better than any other platform. When it
          comes to the numbers, we outrank our competition in every area.
        </p>
        <div className="numbers">
          <div>
            <Number
              number={20}
              description="Years Of Social Media Experience"
              color="#7c0dbe"
              border="right"
            />
            <Number
              number={200}
              description="Recognized Growth Patterns"
              color="#FF00D6"
              border="bottom"
            />
          </div>
          <div>
            <Number
              number={2500}
              description="Aspect Of Customization"
              color="#009CFF"
              border="top"
            />
            <Number
              number={5000}
              description="Targeted Niches"
              color="#BBF6FA"
              border="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Facts)`
  padding: 1em;
  position: relative;
  overflow: hidden;

  .circle-right,
  .left-image,
  .right-image,
  .circle-left {
    display: none;
  }

  .laptop {
    width: 100%;
  }

  .numbers {
    width: 100%;

    > div {
      display: inline-flex;

      > div:first-child {
        border-right: 1px solid #dde0ee;
      }
    }

    > div:first-child {
      border-bottom: 1px solid #dde0ee;
    }
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    padding: 4em 2em;
    justify-content: center;
    align-items: start;

    .circle-right,
    .left-image,
    .right-image,
    .circle-left {
      display: initial;
    }

    .laptop {
      width: 800px;
    }

    .numbers {
      width: 500px;
    }
  }

  .lines {
    bottom: 0;
    left: 0;
    position: absolute;
  }

  .right {
    flex-basis: 25%;
  }

  p {
    margin-bottom: 4em;
  }

  .right-image {
    right: 0;
    top: -25px;
    position: absolute;
  }

  .left-image {
    top: 130px;
    left: -20px;
    position: absolute;
  }

  .images-container {
    position: relative;
    margin-right: 2em;
    margin-top: 4em;
  }

  .circle-left {
    top: -35px;
    left: 140px;
    z-index: -1;
    position: absolute;
  }

  .circle-right {
    z-index: -1;
    right: 35px;
    bottom: 105px;
    position: absolute;
  }
`;
