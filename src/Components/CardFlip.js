import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "@mui/material";

const CardFlip=({kelime,sira,azalt,artir,kelimeler})=> {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleClick}
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "#F5B041",
            color: "#212F3D",
            display: "flex",flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
          }}
        >
          <h1>{kelime.eng}</h1>
          <h3>"{kelime.example}"</h3>
        </div>

        <div
          onClick={handleClick}
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "#212F3D",
            color: "#fff",
            display: "flex", flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
          }}
        >
          <h1>{kelime.tr}</h1>
        </div>
      </ReactCardFlip>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Button disabled={sira ===1} onClick={azalt} variant="contained">Önceki</Button>
        <Button disabled={sira ===kelimeler.length} onClick={artir} variant="contained">Sonraki</Button>
      </div>
    </div>
  );
}

export default CardFlip;