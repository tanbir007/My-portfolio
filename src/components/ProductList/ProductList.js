import React from 'react';
import "./ProductList.css"
import Product from '../product/Product';
import {products} from '../../data'
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire .Its man</h1>
                <p className="pl-des">Some of my work is given here ! Have a look.</p>
            </div>
                <div className="pl-list">
              {products.map((product) =>(
                  <Product key={product.id} img={product.img} link={product.link}/>
              ))}
              
                 </div>
        </div>
    );
};

export default ProductList;