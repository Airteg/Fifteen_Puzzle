import styled from '@emotion/styled';
import React from 'react';
import box1 from './svgComponent/box1.svg';
import box2 from './svgComponent/box2.svg';
import TILE_var from './svgComponent/TILE_var.svg';

const Tile = ({ number, index, onClick }) => {
  // Функція для обробки кліку по плитці
  const handleClick = () => {
    onClick(index);
  };

  return (
    <TileStyled number={number} onClick={handleClick}>
      {number !== 0 ? number : ''}
    </TileStyled>
  );
};

export default Tile;

const TileStyled = styled.div`
  ${(props) => (props.number === 0 ? 'visibility: hidden;' : '')}
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 11vmin;
  background-image: url("${TILE_var}");
  background-repeat: no-repeat;
  background-color: #71D4EB;
`;
