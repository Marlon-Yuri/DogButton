import React, {useState} from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import * as S from './style'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`


export default function Dog() {

const [dog, setDog] = useState([])
const [err, setErr] = useState(false)

function BtnDog (){
    axios.get(`https://dog.ceo/api/breeds/image/random`).then(response => {
        setDog(response.data.message)
        console.log(response.data)
    }).catch(err =>{
        setErr(true)
    })
}
    return (
        <>
        <GlobalStyle/>
            <S.Container>
                <S.BoxBtn>
                  <S.Button onClick={() =>{BtnDog()}}><b>Having a bad day? Click here</b></S.Button>
                </S.BoxBtn>
                <S.BoxDog>
                    {/* TENHO QUE RESOLVER A MERDA DESSE BUG, NÃO RENDERIZAR NADA NA MONTAGEM */}
                 {err  ? 'Procure o doguinho' :( <S.Image src={dog}/>)}  
                </S.BoxDog>

            </S.Container>
        </>


    )
}