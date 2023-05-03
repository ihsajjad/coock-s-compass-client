import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './recipe/recipe';

const Recipes = () => {
    const chef = useLoaderData();
    const { id, chef_picture, chef_name, description, likes, num_recipes, recipes, years_of_experience } = chef;

    if(!chef){
        return <Spinner />
    }
    
    return (
        <div className='lg:px-20 px-4 py-10 bg-amber-50'>
            <div className='w-2/3 mx-auto space-y-3 text-center'>
                <h3 className='text-3xl font-semibold my-5'>{chef_name}</h3>
                <img className='w-full mx-auto' src={chef_picture} alt="" />
                <p><span className='font-bold'>Bio:</span> {description}</p>
                <p><span className='font-bold'>Experience:</span> {years_of_experience}</p>
                <p><span className='font-bold'>Likes:</span> {likes}</p>
                <p><span className='font-bold'>Recipes:</span> {num_recipes}</p>
            </div>
            <h2 className='text-3xl font-bold text-center mt-4'>{chef_name}'s Popular Recipes</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 my-10'>
                {
                    recipes.map(recipe => <Recipe key={recipe.id}
                    recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;