import React from 'react';

const Product = ({ product }) => {
    const { name, image, rating, id, cookingMethod } = product;
    const price = `${id.slice(5, 6)}00`;
    console.log(product)
    return (
        <div className='border-2 border-slate-300 rounded-lg p-3 space-y-3'>
            <img className='rounded-t-lg mx-auto my-4 h-40 w-52' src={image} alt="" />
            <h3 className='text-3xl font-semibold'>{name}</h3>
            <p><span className='font-bold'>Description: </span>{cookingMethod.slice(0,50)}</p>
            <p><span className='font-bold'>Price: </span> ${price}</p>
            <hr className='border border-slate-300 mb-3' />
            <div className='flex items-center justify-between w-full'>
                <div><span className='font-bold'>Ratings: </span> {rating}</div>
                <button className='btn btn-primary'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;