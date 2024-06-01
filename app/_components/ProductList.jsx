import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({productList}) => {
    return (
        <div className="mt-10">
            <h2 className="text-green-600 font-bold text-2xl">Our Popular Products</h2>
            <div className="grid gap-3 
            grid-cols-2 
            md:grid-cols-3
            lg:grid-cols-5 mt-6">
                {productList.map((product,index) => index<10 && (
                    <ProductItem product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList