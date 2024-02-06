import styled from '@emotion/styled';
import React, { useState } from 'react';
import Tile from './Tile';
import Tile1 from './Tile1';
import Tile2 from './Tile2';

const shuffleTiles = () => {
  const shuffledTiles = [...Array(16).keys()].sort(() => Math.random() - 0.5);
  return shuffledTiles;
};
export default function Board() {
  const [tiles, setTiles] = useState(shuffleTiles());
  // const [tiles, setTiles] = useState([
  //   7, 2, 3, 5, 0, 1, 11, 15, 8, 9, 10, 6, 4, 12, 13, 14,
  // ]);
  // const [tiles, setTiles] = useState([
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15,
  // ]);

  const handleTileClick = (clickedIndex) => {
    const emptyIndex = tiles.indexOf(0);
    const clickedRow = Math.floor(clickedIndex / 4);
    const clickedCol = clickedIndex % 4;
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;

    if (clickedRow === emptyRow || clickedCol === emptyCol) {
      const newTiles = [...tiles];
      const step =
        clickedRow === emptyRow
          ? clickedCol < emptyCol
            ? 1
            : -1
          : clickedIndex < emptyIndex
          ? 4
          : -4;

      for (let i = emptyIndex; i !== clickedIndex; i -= step) {
        newTiles[i] = newTiles[i - step];
      }
      newTiles[clickedIndex] = tiles[emptyIndex];
      setTiles(newTiles);
    }
  };
  return (
    <BoardStyled className="board">
      {tiles.map((number, index) => (
        <Tile2
          key={index}
          number={number}
          index={index}
          onClick={handleTileClick}
        />
      ))}
    </BoardStyled>
  );
}
const BoardStyled = styled.div`
width: 90vmin;
height: 90vmin;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
gap: 1vmin;
padding: 2vmin;
background: #0089a9;
container-type: size;
box-shadow: -0.1vmin -0.1vmin 10vmin 0px #71d4ebab, 
            5vmin 5vmin 5vmin 0px #00000010, 
            inset 0.5vmin 0.5vmin 2vmin #00000085, 
            inset 0.8vmin 0.8vmin 0vmin -0.1vmin #66c0d4cc, 
            inset -0.8vmin -0.8vmin 0vmin -0.1vmin #ffffff24, 
            -5vmin -5vmin 10vmin 0px #5c5a5a240;
border-style: inset;
border-width: 1vmin;
border-color: #36abdacc;

`;
