import React from 'react'
import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from './Sliderdata';
import {useState} from 'react'



const Container = styled.div`
width:100%;
height:80vh;
display:flex;
position:relative;
overflow:hidden;
margin-top:5%;
`

const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0vw;
bottom:0vw;
margin:auto;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
cursor:pointer;
z-index:2;

`

const Wrapper = styled.div`
height:100%;
display:flex;
margin:auto;
transition:all 1.5s ease;

transform:translateX(${props=>props.sliderIndex * -100}vw);

`

const Slide = styled.div`
width:100vw;
height:60vh;
display:flex;

align-items:center;
background-color:#${props=>props.bg};
`
const ImgContainer = styled.div`
flex:1
height:100%;

`

const Image = styled.img`
height:30vw;


`
const InfoContainer = styled.div`
flex:1;
width:20vw;
padding:50px;
`
const Title = styled.h1`
font-size:2.5vw;
`
const Desc = styled.p`
margin:50px 0px;
font-size:1.5vw;
font-weight:500;
letter-spacing:2px;
`

const Button = styled.button`
padding:0.9vw;
background-color:transparent;
font-size:1.5vw;
cursor:pointer;
`




const Slider = (props) => {
    const[sliderIndex,setSliderIndex]=useState(0)

    const handleClick=(direction1)=>{
        if(direction1==="left"){

            setSliderIndex(sliderIndex>0?sliderIndex-1:2)

        }
        if(direction1==="right"){

            setSliderIndex(sliderIndex<2?sliderIndex+1:0)

        }
    }
  return (
    <Container>
        <Arrow direction="left">
        <ArrowLeftOutlinedIcon onClick={()=>handleClick("left")}/>
        </Arrow>
        <Wrapper sliderIndex={sliderIndex}>
            {sliderItems.map((items)=>(
            
            
            <Slide bg={items.bg}>
              <ImgContainer>
                <Image src={items.image} />
              </ImgContainer>
              <InfoContainer>
                <Title>{items.title}</Title>
                <Desc>{items.description}</Desc>
                <Button id={items.id} onClick={()=>props.check(items.id)}>SHOP NOW</Button>
              </InfoContainer>
            </Slide>

            ))}
        </Wrapper>
        <Arrow direction="right">
        <ArrowRightOutlinedIcon onClick={()=>handleClick("right")}/>
        </Arrow>
       
       

    </Container>
  )
}

export default Slider