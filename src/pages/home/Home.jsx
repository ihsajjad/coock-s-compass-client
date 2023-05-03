import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './chef/Chef';
import { FaStar } from 'react-icons/fa';
import Product from './product/Product';

const Home = () => {
    const chefs = useLoaderData();

    let products = [];

    for (const chef of chefs) {
        // console.log(chef.recipes)
        const ps = chef.recipes;
        ps.forEach(p => products.push(p))
    }

    console.log(products.length)
    return (
        <main>
            <header className='relative flex items-center justify-center'>
                {/* <img className='h-screen w-screen z-0' src="https://images.unsplash.com/photo-1581949882446-58884cf7ef88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80" alt="" />
                <div className='absolute top-20 text-white text-center'>
                    <h1 className='text-5xl font-bold mb-3'>Cook's Compass</h1> 
                    <p className='text-slate-200'>Embark on a culinary journey to Korea. <br/>
                    From traditional to modern fusion, let our expert chef tantalize your taste buds. Cook's Compass</p>
                </div> */}
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://ln.run/zUU6e")` }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Cook's Compass</h1>
                            <p className="mb-5 text-slate-200"> Discover the authentic flavors of Korea with our premium ingredients. From spicy sauces to savory seasonings, we have everything you need to elevate your Korean dishes.</p>
                            <div>
                                <input type="text" placeholder="Search here" className="input input-bordered input-primary w-full max-w-xs" />
                                <button className="btn btn-primary -ml-20">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Our Chefs section */}
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

            <hr className='border border-slate-300 w-full' />

            {/* Order Now */}
            <section className='lg:px-20 px-4 py-10'>
                <h3 className='text-3xl font-bold text-center'>Order Now</h3>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 my-10'>
                    {
                        products.slice(0, 4).map(product => <Product product={product}
                            key={product.id}></Product>)
                    }
                </div>
            </section>

            <hr className='border border-slate-300 w-full' />

            {/* Client's feedback to cook compass */}
            <section className='lg:px-20 px-4 py-10'>
                <h3 className='text-3xl font-bold text-center'>Clint's feedback to Coock's Compass</h3>
                <div className='my-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative'>
                    <div className='flex flex-col items-center border-2 border-slate-600 rounded-lg p-5 space-y-3'>
                        <img className='w-40 h-40 rounded-full border-2 border-gray-500' src="https://ln.run/_w2YA" alt="" />
                        <h3 className='text-2xl font-semibold'>Hero Alom</h3>
                        <p className='text-slate-500'>The chefs at our restaurant have been using this supplier for years, and we have yet to be disappointed. Their products are high quality, and their prices are competitive.</p>
                        <div className='flex gap-1 text-yellow-600 lg:absolute bottom-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-2 border-slate-600 rounded-lg p-5 space-y-3 relative'>
                        <img className='w-40 h-40 rounded-full border-2 border-gray-500' src="https://ln.run/-s3_X" alt="" />
                        <h3 className='text-2xl font-semibold'>Ranu Mondal</h3>
                        <p className='text-slate-500'>I can't say enough good things about this chef supplier. From the moment I placed my first order, I knew I was dealing with a company that cares about quality and customer satisfaction. I'm a customer for life!</p>
                        <div className='flex gap-1 text-yellow-600 lg:absolute bottom-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-2 border-slate-600 rounded-lg p-5 space-y-3 relative'>
                        <img className='w-40 h-40 rounded-full border-2 border-gray-500' src="https://ln.run/tasgN" alt="" />
                        <h3 className='text-2xl font-semibold'>Sokina Dhar</h3>
                        <p className='text-slate-500'>I just wanted to take a moment to thank you for your amazing service. The quality of your ingredients is exceptional, and your team is always so friendly and helpful. Keep up the great work!</p>
                        <div className='flex gap-1 text-yellow-600 lg:absolute bottom-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;