import React from 'react'
import "./Component1.css"
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button, Drawer } from '@mui/material'
import {useState ,useEffect} from 'react'

import "./Navbar.css"

const Container= styled.div`
height:60px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
`

const Language = styled.span`
font-size:14px;
cursor:pointer;
` 

const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
min-height:3vw;
`

const Input = styled.input`
border:none;
width:20vw;
min-height:3vw;
outline:none;
font-size:2.5vw;
`

const Logo = styled.h1`
font-weight:bold;
font-size:3.5vw;
margin:auto;
`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;

`
const MenuItem = styled.div`
  margin:auto;
`
const Static = styled.div`
min-height:2.8vw;
color:white;
background-color:teal;
display:flex;
align-items:center;
padding-top:1vw;
padding-bottom:1vw;
justify-content:center;
font-size:2vw;
font-weight:500;
`

const Navbar=(props)=> {
    const[flag1,setFlag1]=useState(false)

    

        //total amount is totalbill
        const[totalamount,setTotalamount]=useState(0)

        

    const increasequantfun=(d)=>{ 
        props.cart.map((x)=>{
            if(x.clotheid==d.clotheid){
                x.quantity = x.quantity +1;
                x.total = parseInt(x.selling) * parseInt(x.quantity);
                }
                props.setCart([...props.cart])
        })
    }

 

    useEffect(()=>{
        var z = 0;
         props.cart.map((d)=>{
             z = z + d.quantity * d.selling;
  
         })
         setTotalamount(z)
  
      },[props.cart])

    const decreasequantfun =(d)=>{
        props.cart.map((x)=>{
            if(x.clotheid==d.clotheid){
                if(x.quantity>1){
                x.quantity = x.quantity - 1;
               
                }}
                x.total = parseInt(x.selling) * parseInt(x.quantity);
                props.setCart([...props.cart])
              
        })
    }
  return (
    <Container>
        <Static> Free Shipping over Rs.1000 </Static>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input autoFocus onChange={(event)=>props.searchfun(event)}/>
                   <SearchIcon onClick={()=>props.searchiconclick()}/>                    
                </SearchContainer>
            </Left>
            <Center>
                <Logo>SHOPCLUES</Logo>
            </Center>
            <Right>
                <MenuItem>
                <Badge badgeContent={props.cartid.length} color="primary">
                    <ShoppingCartOutlinedIcon color="action" onClick={()=>setFlag1(true)}/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        <Drawer
         open={flag1}
         anchor='right'
         onClose = {()=>setFlag1(false)}
        >
            <Button variant='contained' onClick={()=>setFlag1(false)}>Close</Button>
           <div id="cart_products">   
          {props.cart.map((e)=>{
              return <div id="repetitive_cart_div">
                  <div id="cart_image_div"><img src={e.image} alt="" id="cart_image_id"/><br/>{e.title}</div>
                  <div id="button_div_id"><button onClick={()=>increasequantfun(e)} className="increment_btn_id_add">+</button><button className="increment_btn_id_quant">{e.quantity}</button><button onClick={()=>decreasequantfun(e)} className="increment_btn_id_decrease">-</button>
                  <p>{"Rs. " +e.total}</p>
                  </div>
                  </div> 
          })}
          <p id="total_amount">{"Total Amount : " +totalamount}</p>
          <button id="checkout" >Checkout</button>
          </div>
        
       
        </Drawer >
    </Container>
  )
}
export default Navbar
