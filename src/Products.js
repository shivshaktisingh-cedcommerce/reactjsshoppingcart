import React from 'react'
import {data} from "./Data.js"
import "./Products.css"

function Products() {
  return (
    <div>

<div id="products_main_div">
        {data.demo.map((d)=>{
            return <div id="repetitive_demo">
                           <div id="product_image_div_id"><img src={d.image} alt="" id="product_image_id"/></div>
                           <p id="product_title_p_id">{d.title}</p>
                </div>

        })}
        </div>

    </div>
  )
}

export default Products