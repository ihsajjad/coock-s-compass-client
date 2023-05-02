import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './chef/Chef';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <main>
            <header className='relative flex items-center justify-center'>
                <img className='h-screen w-screen z-0' src="https://images.unsplash.com/photo-1581949882446-58884cf7ef88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80" alt="" />
                <div className='absolute top-20 text-white text-center'>
                    <h1 className='text-5xl font-bold mb-3'>Cook's Compass</h1> 
                    <p className='text-slate-200'>Embark on a culinary journey to Korea. <br/>
                    From traditional to modern fusion, let our expert chef tantalize your taste buds. Cook's Compass</p>
                </div>
            </header>
            <section className='lg:px-20 px-4 py-10'>
                <h3 className='text-3xl text-center font-bold mb-8 '>Our Chefs</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        chefs.map(chef => <Chef 
                        key={chef.id}
                        chef={chef}
                        ></Chef>)
                    }
                </div>
            </section>
        </main>
    );
};

export default Home;