
import styled from "styled-components";
import BackImage from '../imgs/back.webp'
import BackMobile from '../imgs/mobileback.webp'

export const BoxBtn = styled.div`
height:70vh;
width:30vw;
display:flex;
justify-content: space-evenly;
align-items:center;
`
export const Container = styled.section`
height:112vh; 
display:flex;
justify-content: space-evenly;
align-items:center;
background-image: url(${BackImage});
@media(max-width:900px){
    background-image: url(${BackMobile});
}
`
export const BoxDog = styled.figure`
width:52vw;
height:73vh;
display:flex;
justify-content:center;
align-items:center;
`
export const Button = styled.button`
width:25vw;
height:15vh; 
font-size:2vw;
font-family: 'Underdog', cursive;
cursor: pointer;
transition: 1s ease;
background-color: #EE9A00;
border-style: none;
border-radius: 7%;
:hover{
    box-shadow: 8px 9px 5px black;
    transform: scaleY(1.2);
    transform: scaleX(1.1);
}

@media(max-width:760px){
    font-size:3.5vw;  
    position:absolute;
    top:16%;
    left:33%;
    width:43vw;
    height:19vh; 
    box-shadow: 8px 9px 5px black;
    background-color: #B8860B;
}



`
export const Image = styled.img`
width:47vw;

@media(max-width:760px){
    position:absolute;
    top:50%;
    left:28%;
    width:52vw;
}
`