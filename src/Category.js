import React from 'react'
import styled from "styled-components"
import {data} from "./Data.js"
import "./Category.css"
import {useState} from 'react'

const Container = styled.div`
width:100%;
margin:auto;
display:flex;
flex-wrap:wrap;
justify-content:center;

`

const Categories =styled.div`
width:43vh;
position:relative;
margin-left:1%;
`
const Image = styled.img`
width:100%;
opacity:0.7;
object-fit:cover;


`
const Title = styled.h1`
font-size:2.5vw;
font-weight:bold;
position:absolute;
top:16vw;
left:9vw;
bottom:0;
margin:auto;
` 

const Button = styled.button`
position:absolute;
top:20vw;
left:9vw;
padding:0.9vw;
background-color:transparent;
font-size:1.5vw;
cursor:pointer;
border-radius:3px;

`
const Categories1 =styled.div`
width:33vh;
position:relative;
margin-left:5%;
margin-top:3%;
padding:1vw;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Image1 = styled.img`
width:80%;
object-fit:cover;


`
const Title1 = styled.h1`
font-size:1.7vw;
font-weight:bold;
padding:1vw;

margin:auto;
` 

const Button1 = styled.button`

padding:0.9vw;
background-color:transparent;
font-size:1.5vw;
cursor:pointer;
border-radius:3px;
`

const Price = styled.p`
font-size:1.5vw;
color:red;
`

const Size = styled.p`
font-size:1.5vw;
color:black;
`


const Category = (props) => {
    const[flag1,setFlag1]=useState(0)
    const[flag2,setFlag2]=useState(0)

   

    const displayProducts=(event)=>{
        if(event.target.id==="tshirt"){
            setFlag2(1)
        }
        if(event.target.id==="shirt"){
            setFlag2(2)
        }
        if(event.target.id==="trouser"){
            setFlag2(3)
        }
       
        
    }


  return (
    <Container>
       {flag1===0?data.categories.map((d)=>(
        <Categories>    
            <Image src ={d.image}></Image>
            <Title>{d.title}</Title>
            <Button className="btn" id={d.type} onClick={displayProducts}>Shop Now</Button>
        </Categories>
        )):""}
   
         {flag2===1?data.tshirt.map((d)=>(
        <Categories1>    
            <Image1 src ={d.image}></Image1>
            <Title1>{d.title}</Title1>
            <Price><del>{"Rs. " +d.Listprice}</del> <span style={{color:"blue"}}>{"Rs. " + d.selling}</span></Price>
            <Size>{"Size " +d.size}</Size>
            <Button1 className="btn" id={d.type} onClick={()=>props.addtocartfun(d , d.clotheid)}>Add to Cart</Button1>
        </Categories1>
        )):""}
         {flag2===2?data.shirt.map((d)=>(
        <Categories1>    
          <Image1 src ={d.image}></Image1>
          <Title1>{d.title}</Title1>
          <Price><del>{"Rs. " +d.Listprice}</del> <span style={{color:"blue"}}>{"Rs. " + d.selling}</span></Price>
          <Size>{"Size " +d.size}</Size>
          <Button1 className="btn" id={d.type} onClick={()=>props.addtocartfun(d , d.clotheid)}>Add to Cart</Button1>
        </Categories1>
        )):""}
         {flag2===3?data.trouser.map((d)=>(
        <Categories1>    
           <Image1 src ={d.image}></Image1>
           <Title1>{d.title}</Title1>
           <Price><del>{"Rs. " +d.Listprice}</del> <span style={{color:"blue"}}>{"Rs. " + d.selling}</span></Price>
           <Size>{"Size " +d.size}</Size>
           <Button1 className="btn" id={d.type} onClick={()=>props.addtocartfun(d , d.clotheid)}>Add to Cart</Button1>
        </Categories1>
        )):""}
          {props.typeflag===1?data.tshirt.map((d)=>(
        <Categories1>    
           <Image1 src ={d.image}></Image1>
           <Title1>{d.title}</Title1>
           <Price><del>{"Rs. " +d.Listprice}</del> <span style={{color:"blue"}}>{"Rs. " + d.selling}</span></Price>
           <Size>{"Size " +d.size}</Size>
           <Button1 className="btn" id={d.type} onClick={()=>props.addtocartfun(d , d.clotheid)}>Add to Cart</Button1>
        </Categories1>
        )):""}
         {props.typeflag===2?data.trouser.map((d)=>(
        <Categories1>    
           <Image1 src ={d.image}></Image1>
           <Title1>{d.title}</Title1>
           <Price><del>{"Rs. " +d.Listprice}</del> <span style={{color:"blue"}}>{"Rs. " + d.selling}</span></Price>
           <Size>{"Size " +d.size}</Size>
           <Button1 className="btn" id={d.type} onClick={()=>props.addtocartfun(d , d.clotheid)}>Add to Cart</Button1>
        </Categories1>
        )):""}
         {props.typeflag===3?data.shirt.map((d)=>(
        <Categories1>    
           <Image1 src ={d.image}></Image1>
           <Title1>{d.title}</Title1>
           <Price><del>{"Rs. " +d.Listprice}</del> <span style={{color:"blue"}}>{"Rs. " + d.selling}</span></Price>
           <Size>{"Size " +d.size}</Size>
           <Button1 className="btn" id={d.type} onClick={()=>props.addtocartfun(d , d.clotheid)}>Add to Cart</Button1>
        </Categories1>
        )):""}
        {props.searchname.map((d)=>{
                return  <Categories1>    
                <Image1 src ={d.image}></Image1>
                <Title1>{d.title}</Title1>
                <Price><del>{"Rs. " +d.Listprice}</del> <span style={{color:"blue"}}>{"Rs. " + d.selling}</span></Price>
                <Size>{"Size " +d.size}</Size>
                <Button1 className="btn" id={d.type} onClick={()=>props.addtocartfun(d , d.clotheid)}>Add to Cart</Button1>
             </Categories1>
  
            
           

        })}
  
    </Container>
  )
}

export default Category