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
const [erromsg, setErroMsg] = useState('')
const [showDog, setShowdog] = useState(false)

function BtnDog (){
    axios.get(`https://dog.ceo/api/breeds/image/random`).then(response => {
        setDog(response.data.message)
        console.log(response.data)
        setShowdog(true)
    }).catch(err =>{
       console.log("Rolou erro aí :" + err)
        setErroMsg('Aconteceu alguma coisa errada nos bastidores')
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
                   {showDog && <S.Image src={dog} alt='Doguinho'/> }
                 {erromsg}  
                </S.BoxDog>

            </S.Container>
        </>


    )
}