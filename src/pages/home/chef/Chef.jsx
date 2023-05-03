import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { chef_name, chef_picture, likes, years_of_experience, num_recipes, id } = chef;


    return (
        <div className='border-2 border-amber-300 rounded-lg p-5 text-slate-500'>
            <LazyLoad height={336}>
                <img className='rounded-t-lg mx-auto' src={chef_picture} alt="" />
            </LazyLoad>
            <div className='my-4'>
                <h3 className='text-2xl font-semibold'>{chef_name}</h3>
                <p>Years of Experience: {years_of_experience}</p>
                <p>Recipes: {num_recipes}</p>
            </div>
            <hr className='border border-amber-300 mb-3' />
            <div className='flex items-center justify-between'>
                <div className='flex justify-center items-center gap-2'><FaThumbsUp className='text-amber-400 text-xl' /> {likes}</div>
                <Link to={`/chefs/${id}`} className='custom-btn' chef={chef}>View Recipes</Link>
            </div>
        </div>
    );
};

export default Chef;