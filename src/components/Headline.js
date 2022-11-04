import styled from 'styled-components';

const Headline = ({ className, boldText, normalText }) => {
  return (
    <h1 className={className}>
      {boldText} <span>{normalText}</span>
    </h1>
  );
};

export default styled(Headline)`
  margin-bottom: 1em;

  span {
    font-weight: 400;
  }
`;
