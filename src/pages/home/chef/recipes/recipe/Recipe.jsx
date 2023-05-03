import React, { useContext, useState } from 'react';
import { ToastContext } from '../../../../../providers/toast/ToastProvider';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipe = ({ recipe }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const { id, name, image, ingredients, cookingMethod, rating } = recipe;
    const handleToast = useContext(ToastContext);

    const handleAddToFavorite = () => {

        handleToast('Successfully Added' , 'This recipe is added to your favorite list', 'success')
        setIsDisabled(true)
    }

    
    return (
        /* style={{ height: '336px', width: '336px' }} */
        <div className='border-2 border-amber-300 rounded-lg p-5 relative shadow-xl'>
            <img className='rounded-t-lg mx-auto lg:h-96 ' src={image} alt="" />
            <div className='my-4'>
                <h3 className='text-3xl font-semibold'>{name}</h3>
                <div>
                    <h4 className='text-xl pb-1 mb-2 border-b-2 border-slate-500 inline-block'>Ingredients : </h4>
                    <ol className='list-decimal pl-6 mt-3'>
                        {
                            ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
                        }
                    </ol>
                </div>
                <p className='mb-16 mt-4'><span className='font-bold'>Method: </span> {cookingMethod}</p>
            </div>
            <div className='w-full absolute px-8 py-4 bottom-0 right-0'>
                <hr className='border border-amber-300 mb-3' />
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center justify-center'><Rating style={{ maxWidth: '150px' }} value={rating} readOnly/> <span className='text-xl'>{rating}</span></div>
                    <button onClick={handleAddToFavorite} className='custom-btn' 
                    disabled={isDisabled}
                    >Add to Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;