import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function CardInput({kelimeler,setKelimeler}) {
  const [input, setInput] = useState({id:null, eng:"",tr:"",example:""});

  const changeEng=(e)=>{
    setInput({...input,eng:e.target.value})
  }
  const changeTr=(e)=>{
    setInput({...input,tr:e.target.value})
  }
  const changeExp=(e)=>{
    setInput({...input,id:kelimeler.length +1 , example:e.target.value})
  }

  const ekleHandler=(e)=>{
    setKelimeler([...kelimeler,input])
    setInput({id:null, eng:"",tr:"",example:""})
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField value={input.eng} onChange={changeEng}
        style={{ width: "500px", marginTop: "15px" }}
        id="outlined-basic"
        label="English"
        variant="outlined"
      />
      <TextField value={input.tr} onChange={changeTr}
        style={{ width: "500px", marginTop: "15px" }}
        id="outlined-basic"
        label="Turkish"
        variant="outlined"
      />
      <TextField value={input.example} onChange={changeExp}
        style={{ width: "500px", marginTop: "15px" }}
        id="outlined-basic"
        label="Example"
        variant="outlined"
      />
      <Button onClick={(e)=>ekleHandler(e)} style={{ marginTop: "15px" }} variant="contained" color="success">
        EKLE
      </Button>
    </div>
  );
}

export default CardInput;