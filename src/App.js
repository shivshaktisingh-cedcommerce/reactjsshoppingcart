import Navbar from "./Navbar"
import Slider from "./Slider"
import Category from "./Category"
import {useState} from 'react'
import {data} from "./Data.js"
import styled from "styled-components"

import './App.css';



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


function App() {

  const [typeflag,setTypeflag]=useState(0)

   //searchname contains the text typed in searchbox
   const[searchname, setSearchname]=useState([])

   //searchinput contains list of all mathched search items
   const[searchinput, setSearchinput]=useState()


       //selected items are in cart arrray
       const [cart,setCart]=useState([])

       //cartis contains id of selected item
       const [cartid,setCartid]=useState([])

  const check=(d)=>{
    setTypeflag(d)

  }

  const searchfun=(event)=>{
    setSearchname([])
    var query = event.target.value
    setSearchinput(query)
    var temp=[]
    if (query.length > 0) {           
     data.clothes.map((i)=>{
         if(i.title.includes(query)){
             temp.push(i)
         }
       
     })
    }
    setSearchname([...temp])
     console.log(searchname)
}

//will execute on click of search icon

const searchiconclick=()=>{

 
   
}


  const addtocartfun=(d , i)=>{
    if(cartid.indexOf(i)===-1){
        setCartid([...cartid,i])
        setCart([...cart,d])
    }

}
  return (
    <div className="App">
      <Navbar cartid={cartid} cart={cart} setCart={setCart} searchfun={searchfun} searchiconclick={searchiconclick}/>
      <Slider check={check}/>
      <Category  typeflag={typeflag} addtocartfun={addtocartfun} searchname={searchname}/>

      
    </div>
  );
}

export default App;
