import styled from '@emotion/styled';
import React from 'react';

const Tile2 = ({ number, index, onClick }) => {
  // Функція для обробки кліку по плитці
  const handleClick = () => {
    onClick(index);
  };

  return (
    <TileStyled number={number} onClick={handleClick}>
      <div className="num">{number !== 0 ? number : ''}</div>
    </TileStyled>
  );
};

export default Tile2;

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
  font-size: 5vmin;
  font-weight: bold;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: -0.3vmin -0.3vmin 0.6vmin #ffffff3d, 0.6vmin 0.6vmin 0.7vmin #00000014,
  0.6vmin 0.6vmin 0.7vmin #00000034;
  background: radial-gradient(circle at 67% 72%, #ffffff44 0%, #ffffff10 34%);
  container-type: size;
  :before{
    content: "";
    position: absolute;
    display: block;
    width: 77cqw;
    height: 77cqh;
    border-radius: 50%;
    box-shadow: inset 0.6vmin 0.6vmin 0.8vmin 0.8vmin #00000014,
    inset -0.6vmin -0.6vmin 0.7vmin 0.2vmin #ffffff22;
    /* border: 1px red solid; */
  }

`;
