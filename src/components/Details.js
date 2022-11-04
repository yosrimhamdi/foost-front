import styled, { css } from 'styled-components';

const Details = ({
  className,
  summary,
  description,
  index,
  setActiveIndex,
}) => {
  return (
    <details className={className} onClick={() => setActiveIndex(index)}>
      <summary>{summary}</summary>
      <p>{description}</p>
    </details>
  );
};

export default styled(Details)`
  padding: 1em;
  width: 100%;
  transition: 0.3s all ease-in-out;

  @media only screen and (min-width: 600px) {
    padding: 1.5em 4em;
  }

  ${({ index, activeIndex }) => {
    if (index === activeIndex) {
      return css`
        background-color: #fff;
        box-shadow: 0 5px 15px -14px rgb(0 0 0 / 75%);
      `;
    }
  }}

  summary {
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    list-style-type: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::before {
    content: '-';
    background-color: rgb(17, 139, 252);
    color: white;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
    width: 30px;
    aspect-ratio: 1;

    ${({ index, activeIndex }) => {
      if (index === activeIndex) {
        return css`
          content: '+';
        `;
      }
    }}
  }

  p {
    margin-top: 1em;
  }
`;
