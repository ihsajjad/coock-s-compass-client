import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const chef = useLoaderData();
    console.log(chef);
    const { id, chef_picture, chef_name, description, likes, num_recipes, recipes, years_of_experience } = chef;
    return (
        <div className='px-20 py-16 w-2/3 mx-auto space-y-3 text-center'>
            <h3 className='text-3xl font-semibold my-5'>{chef_name}</h3>
            <img className='w-full mx-auto' src={chef_picture} alt="" />
            <p><span className='font-bold'>Bio:</span> {description}</p>
            <p><span className='font-bold'>Experience:</span> {years_of_experience}</p>
            <p><span className='font-bold'>Likes:</span> {likes}</p>
            <p><span className='font-bold'>Recipes:</span> {num_recipes}</p>
        </div>
    );
};

export default Recipes;