import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { chef_name, chef_picture, likes, years_of_experience, num_recipes, id } = chef;

    /*  Chef Picture
 Chef Name
 Years of experience
 Numbers of recipes
     Likes
 View Recipes Button */
    return (
        <div className='border-2 border-slate-300 rounded-lg p-5'>
            <img className='rounded-t-lg mx-auto' src={chef_picture} style={{ height: '336px', width: '336px' }} alt="" />
            <div className='my-4'>
                <h3 className='text-2xl font-semibold'>{chef_name}</h3>
                <p>Years of Experience: {years_of_experience}</p>
                <p>Recipes: {num_recipes}</p>
            </div>
            <hr className='border border-slate-300 mb-3'/>
            <div className='flex items-center justify-between'>
                <div>Likes: {likes}</div>
                <Link to={`/chefs/${id}`} className='bg-yellow-400 py-2 px-4 rounded-lg font-bold border-2 border-slate-600' chef={chef}>View Recipes</Link>
            </div>
        </div>
    );
};

export default Chef;