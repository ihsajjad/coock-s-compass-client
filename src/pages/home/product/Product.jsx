import React from 'react';

const Product = ({ product }) => {
    const { name, image, rating, id, cookingMethod } = product;
    const price = `${id.slice(5, 6)}00`;
    console.log(product)
    return (
        <div className='border border-amber-300 rounded-lg p-3 space-y-3 shadow-lg'>
            <img className='rounded-t-lg mx-auto mb-4 h-40 w-60' src={image} alt="" />
            <h3 className='text-3xl font-semibold'>{name}</h3>
            <p><span className='font-bold'>Description: </span>{cookingMethod.slice(0,50)}</p>
            <p><span className='font-bold'>Price: </span> ${price}</p>
            <hr className='border border-amber-300 mb-3' />
            <div className='flex items-center justify-between w-full'>
                <div><span className='font-bold'>Ratings: </span> {rating}</div>
                <button className='custom-btn'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;