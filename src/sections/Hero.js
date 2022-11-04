/* eslint-disable */

import styled from 'styled-components';
import { keyframes } from 'styled-components';

import logo from '../assets/foost-logo.png';
import lines from '../assets/bl-shape.png';
import movingWave from '../assets/moving-wave.png';
import fixedWave from '../assets/fixed-wave.png';
import Button from '../components/Button';
import Stars from '../components/Stars';

const Hero = ({ className }) => {
  return (
    <div className={className}>
      <header>
        <img src={logo} alt="foost  logo" />
        <button className="sign-up">Sign In</button>
      </header>
      <div className="container">
        <h4>The Best Service For Instagram Growth</h4>
        <h1>Get 35,000 Instagram Followers For $9/Week</h1>
        <div
          id="vidalytics_embed_Dzzo9jltRxBIbQAv"
          style={{
            maxWidth: '1170px',
            position: 'relative',
            paddingTop: '53.85%',
            margin: '0 auto',
          }}
        ></div>

        {(function (v, i, d, a, l, y, t, c, s) {
          y = '_' + d.toLowerCase();
          c = d + 'L';
          if (!v[d]) {
            v[d] = {};
          }
          if (!v[c]) {
            v[c] = {};
          }
          if (!v[y]) {
            v[y] = {};
          }
          var vl = 'Loader',
            vli = v[y][vl],
            vsl = v[c][vl + 'Script'],
            vlf = v[c][vl + 'Loaded'],
            ve = 'Embed';
          if (!vsl) {
            vsl = function (u, cb) {
              if (t) {
                cb();
                return;
              }
              s = i.createElement('script');
              s.type = 'text/javascript';
              s.async = 1;
              s.src = u;
              if (s.readyState) {
                s.onreadystatechange = function () {
                  if (s.readyState === 'loaded' || s.readyState == 'complete') {
                    s.onreadystatechange = null;
                    vlf = 1;
                    cb();
                  }
                };
              } else {
                s.onload = function () {
                  vlf = 1;
                  cb();
                };
              }
              i.getElementsByTagName('head')[0].appendChild(s);
            };
          }
          vsl(l + 'loader.min.js', function () {
            if (!vli) {
              var vlc = v[c][vl];
              vli = new vlc();
            }
            vli.loadScript(l + 'player.min.js', function () {
              var vec = v[d][ve];
              t = new vec();
              t.run(a);
            });
          });
        })(
          window,
          document,
          'Vidalytics',
          'vidalytics_embed_Dzzo9jltRxBIbQAv',
          'https://fast.vidalytics.com/embeds/eV9uHF_8/Dzzo9jltRxBIbQAv/'
        )}
        <h2>Signup in 60 seconds</h2>
        <h2>Start Getting Followers In 5 Minutes</h2>
        <h3>Easy to Cancel - Cancel Anytime</h3>
        <h3> Money Back Guarantee</h3>
        <Button text="Start Now" animated color="black" />
        <Stars />
        <p>
          (based on <span>1,256</span> reviews)
        </p>
      </div>
      <div className="waves">
        <img src={fixedWave} className="fixed-wave" alt="fixed wave" />
        <img src={movingWave} className="moving-wave-1" alt="moving wave 1" />
        <img src={movingWave} className="moving-wave-2" alt="moving wave 2" />
      </div>
    </div>
  );
};

const moveWave = keyframes`
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(-50%);
    }
`;

export default styled(Hero)`
  background: linear-gradient(to right, #c12dd1, #6d8cf8);
  position: relative;
  text-align: center;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background: url(${lines});
  }

  .container {
    padding: 1em;
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1em;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 1.5em;
  }

  @media only screen and (min-width: 600px) {
    header {
      padding: 1em 20%;
    }

    .container {
      padding: 2em 0;
      width: 80%;
      margin: 0 auto;
    }

    h1 {
      font-size: 45px;
      padding: 0 3em;
      width: 80%;
      margin: 0 auto;
      margin-bottom: 1.5em;
    }
  }

  h2 {
    font-size: 35px;
    font-weight: 600;
    line-height: 1.8;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.8;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      display: block;
      width: 10px;
      aspect-ratio: 1;
      background-color: white;
      border-radius: 50%;
      margin-right: 0.5em;
    }
  }

  h4 {
    font-weight: 400;
    font-size: 1.2rem;
  }

  .sign-up {
    color: #212529;
    background-color: #29f5eb;
    border-radius: 20px;
    transition: 0.3s all ease-in-out;
    height: 40px;
    width: 88px;
    font-size: 1rem;
    font-family: 'Circular Std Book';
    transition: 0.3s all ease-in-out;
    cursor: pointer;
    position: relative;

    &:hover {
      color: white;
      background-color: #009cff;
    }
  }

  p {
    font-family: 'Circular Std Book';

    span {
      color: black;
    }
  }

  .waves {
    position: relative;
    overflow: hidden;
    transform: translateY(10px);

    img {
      width: 100%;
    }

    .moving-wave-1,
    .moving-wave-2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 100%;
    }

    .fixed-wave {
      opacity: 0.5;
    }

    .moving-wave-1 {
      animation: ${moveWave} 10s linear infinite;
      opacity: 0.5;
    }

    .moving-wave-2 {
      animation: ${moveWave} 15s linear infinite;
      opacity: 0.75;
    }
  }
`;
