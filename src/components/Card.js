import styled from 'styled-components';
import Icon from './Icon';

const Card = ({ className, title, description, icon }) => {
  return (
    <div className={className}>
      <Icon icon={icon} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default styled(Card)`
  box-shadow: 0 8px 9px 0 rgb(7 7 56 / 15%);
  margin-bottom: 2em;
  display: flex;
  padding: 1em 2em 2em 0em;
  counter-increment: css-counter 1;
  position: relative;

  &:hover::before {
    color: #7c0dbe;
  }

  &::before {
    content: counter(css-counter);
    position: absolute;
    bottom: 0;
    font-size: 5rem;
    left: 0;
    transform: translate(-60%, 0);
    color: #dad2df;
    transition: all 400ms;
  }

  &:hover .icon-wrapper {
    background: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover .icon::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  > div {
    margin-left: 2em;
  }
`;
