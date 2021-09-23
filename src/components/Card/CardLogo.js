import { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperLogo = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  justify-content: center;

  img {
    padding: 5px;
    background: white;
    border-radius: 50%;
  }
`;

const CardLogo = ({src1, src2}) => {
  return (
      <WrapperLogo>
        {src2 ? (
            <Fragment>
              <img
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '48%',
                    width: 63,
                    height: 63
                  }}
                  width="63"
                  src={src1}
                  alt="logo"
              />
              <img
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: '48%',
                    width: 63,
                    height: 63
                  }}
                  width="63"
                  src={src2}
                  alt="logo"
              />
            </Fragment>
        ) : (
            <img
                alt="logo"
                src={src1}
                style={{
                  width: 63,
                  height: 63
                }}
            />
        )}
      </WrapperLogo>
  );
};

export const CardLogoPool = ({src1, src2, src3}) => {
  return (
      <WrapperLogo>
        <img
            style={{
              width: 63,
              height: 63
            }}
            width="63"
            src={src1}
            alt="logo"
        />
        {
          src2 && (
              <img
                  style={{
                    width: 63,
                    height: 63
                  }}
                  width="63"
                  src={src2}
                  alt="logo"
              />
          )
        }

        {
          src3 && (
              <img
                  style={{
                    width: 63,
                    height: 63
                  }}
                  width="63"
                  src={src3}
                  alt="logo"
              />
          )
        }
      </WrapperLogo>
  );
};

CardLogo.propTypes = {
  src1: PropTypes.string.isRequired,
  src2: PropTypes.string
};

export default CardLogo;