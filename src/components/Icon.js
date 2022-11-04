import styled from 'styled-components';

const Icon = ({ className, icon }) => {
  return (
    <div className={`${className} icon`}>
      <div className="icon-wrapper">
        <i class={`fa-solid ${icon}`}></i>
      </div>
    </div>
  );
};

export default styled(Icon)`
  background-color: #f1f2fa;
  box-shadow: 0 16px 20px 0 rgb(43 1 68 / 11%);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 400ms;
    border-radius: 50%;
    opacity: 0;
    background-image: -webkit-linear-gradient(
      173deg,
      #4cd0ff 0%,
      #617af4 53%,
      #ff03d0 99%
    );
  }

  div {
    transition: all 400ms;
    font-size: 2.8rem;
    background-image: -webkit-linear-gradient(
      173deg,
      #ff00d7 30%,
      #50c7f5 67%,
      #72aaff 99%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
  }
`;
