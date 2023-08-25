import React,{useState} from 'react'
import CardFlip from './CardFlip';
import CardInput from './CardInput';
import { Button } from '@mui/material';

function List() {
    const[kelimeler,setKelimeler]=useState([
        {id:1, eng:"Bring",tr:"Getirmek",example:"Bring it"},
        {id:2, eng:"Go",tr:"Gitmek",example:"Go home"},
        {id:3, eng:"Find",tr:"Bulmak",example:"Find it"},
    ])
    const[islem,setIslem] = useState(false); 
    const kelimeKarti=()=>{
        setIslem(true)
    }
    const kelimeEkle=()=>{
        setIslem(false)
    }
    const[sira,setSira]=useState(1)
    const artir =()=>{
        setSira(prevState=>prevState+1)
    }
    const azalt =()=>{
        setSira(prevState=>prevState-1)
    }

    
  return (
    <div>
        <div style={{marginTop:"15px", display:"flex",justifyContent:"space-around",marginBottom:"30px"}}>
        <Button onClick={kelimeKarti} variant="contained" color="secondary">Kelime Kartları</Button>
        <Button onClick={kelimeEkle} variant="contained" color="secondary">Kelime Ekle</Button>
        </div>
        {
            islem ? kelimeler.map((kelime)=>{
                if(kelime.id === sira){
                    return <CardFlip key={kelime.id} kelime={kelime} azalt={azalt} artir={artir} sira={sira} kelimeler={kelimeler} />
                }
            }) : <CardInput kelimeler={kelimeler} setKelimeler ={setKelimeler} />
        }
    </div>
  )
}

export default List