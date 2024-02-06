import styled from '@emotion/styled';
import React from 'react';
import box1 from './svgComponent/box1.svg';
import box2 from './svgComponent/box2.svg';

const Tile = ({ number, index, onClick }) => {
  // Функція для обробки кліку по плитці
  const handleClick = () => {
    onClick(index);
  };

  return (
    <TileStyled number={number} onClick={handleClick}>
      <InnerSurface>
        <InternalDepression>{number !== 0 ? number : ''}</InternalDepression>
      </InnerSurface>
    </TileStyled>
  );
};

export default Tile;

// const TileStyled = styled.div`
//   ${(props) => (props.number === 0 ? 'visibility: hidden;' : '')}
//   display: flex;
//   position: relative;
//   align-items: center;
//   justify-content: center;
//   line-height: 1;
//   width: 100%;
//   height: 100%;
//   mix-blend-mode: multiply;

//   text-decoration: none;
//   color: #fff;
//   font-family: "Roboto", sans-serif;
//   font-weight: 700;
//   font-style: normal;
//   font-size: 11vmin;
//   background-image: url("${box1}"), url("${box2}");
//   background-repeat: no-repeat;
// `;
const TileStyled = styled.div`
  ${(props) => (props.number === 0 ? 'visibility: hidden;' : '')}
  // border: 1px red solid;
  border-radius: 11%;
  background: linear-gradient(135deg, #3838384d 0%, #38383873 24%, #c4c4c4d6 78%, #fcfcfcf7 100%);
  background-color: #71D4EB;
  
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;
const InnerSurface = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(225deg, #3838384d 0%, #38383873 24%, #c4c4c4d6 78%, #fcfcfcf7 100%);
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InternalDepression = styled.div`
  width: 90%;
  height: 90%;
  border-radius: inherit;
  background: linear-gradient(to right, #32323247, #ffffff80);
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  container-type: size;

  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 11vmin;

  &:before {
    content: "";
    width: 87cqw;
    height: 87cqh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #3232321a 0%, #32323247 15%, #7a7a7a87 39%, #b3b3b3ba 60%, #dcdcdce0 77%, #f5f5f5f7 92%, #ffffff80 100%);
    background-color: inherit;
    z-index: -1;
    border-radius: 25%;
`;
