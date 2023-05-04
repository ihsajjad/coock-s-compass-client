import React from 'react';

const Blog = () => {
    return (
        <main className='lg:px-20 py-10'>
            <h2 className='text-4xl font-bold text-center border-b-4 border-amber-400 pb-2'>Some Questions and Answers</h2>
            <div className='p-10 space-y-10'>
                <article className='p-10 border border-amber-300 shadow-lg rounded-lg border-l-8'>
                    <h3 className='text-3xl font-semibold'>1. Differences between controlled and uncontrolled Components</h3>
                    <div className=' space-y-3'>
                        <p className='font-bold'>The primary difference between controlled and uncontrolled components is: </p>
                        <p><span className='font-bold'>A controlled</span> functional component is a component that receives its current value and update callback via props.</p>
                        <p><span className='font-bold'>An uncontrolled</span> functional component is a component that maintains its own internal state.</p>
                        <p className='font-semibold'>Some differences between controlled and uncontrolled function :</p>
                        <ol className='list-decimal	pl-8'>
                            <li>A controlled function is managed by state. On the other hand an Uncontrolled function is managed by component's own internal state.</li>
                            <li>In controlled components, parent component updates state on user interaction. But in uncontrolled components, component updates own internal state on user interaction</li>
                            <li>Controlled components generally faster as there's less state management. Uncontrolled components generally slower as there's more state management.</li>
                            <li>Example: we can use controlled components in payment system. On the other hand we can use uncontrolled components for search bar.</li>
                        </ol>
                    </div>
                </article>
                <article className='p-10 border border-amber-300 shadow-lg rounded-lg border-l-8'>
                    <h3 className='text-3xl font-semibold mb-3'>2. How to validate React props using PropTypes?</h3>
                    <div className='space-y-3'>
                        <p>React PropTypes is a library that allows you to validate the props passed to your React components. It provides a way to specify the types and shapes of the props that a component should receive, making it easier to catch errors early on in development. </p>
                        <p>PropTypes is easy to use and helps ensure that your code is correct and free of errors. To use PropTypes, you first need to install it as a dependency in your project. Once installed, you can import it into your components and define the propTypes object to specify the expected types of your props. PropTypes supports a wide range of data types and shapes, including arrays, objects, strings, numbers, booleans, and more. </p>
                        <p>By using PropTypes, you can create more robust and error-free React components that are easier to maintain and understand.</p>
                    </div>
                </article>
                <article className='p-10 border border-amber-300 shadow-lg rounded-lg border-l-8'>
                    <h3 className='text-3xl font-semibold mb-3'>3. Difference between nodejs and express js.</h3>
                    <div className='space-y-3'>
                        <p>Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. It provides an event-driven, non-blocking I/O model that makes it ideal for building high-performance, scalable, and real-time applications. </p>
                        <p>Express.js, on the other hand, is a lightweight framework that runs on top of Node.js and provides a set of features for building web applications and APIs. Express.js simplifies the process of building web applications by providing a robust set of tools and middleware, including routing, error handling, and template engines. While Node.js provides a lower-level API for handling HTTP requests and responses, Express.js builds on top of that to provide a higher-level abstraction.</p>
                        <p>Express.js builds on top of that to provide a higher-level abstraction.</p>
                    </div>
                </article>
                <article className='p-10 border border-amber-300 shadow-lg rounded-lg border-l-8'>
                    <h3 className='text-3xl font-semibold mb-3'>4. What is a custom hook, and why will you create a custom hook?</h3>
                    <div className='space-y-3'>
                        <p>In React, a custom hook is a JavaScript function that uses one or more built-in hooks and returns a stateful value or other reusable logic. Custom hooks allow you to abstract and reuse complex logic across multiple components without duplicating code. They enable you to encapsulate and share common functionality that is not related to any specific component and can be reused across your application. </p>
                        <p>You might create a custom hook when you find yourself duplicating code across multiple components or when you want to share stateful logic between unrelated components. For example, if you have multiple components that need to fetch data from a remote API, you can create a custom hook that encapsulates the data fetching logic and returns the results as well as the loading and error state. By doing so, you can keep your components simple and focused while reducing code duplication and improving code maintainability.</p>
                        <p>Overall, custom hooks provide a powerful way to extract and reuse common logic in your React applications, making your code more modular, readable, and maintainable.</p>
                    </div>
                </article>
            </div>
        </main>
    );
};

export default Blog;