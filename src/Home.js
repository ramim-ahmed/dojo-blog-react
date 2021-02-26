import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { 
            id : 1,
            title : 'My New Website',
            body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis erat commodo, interdum metus vel, efficitur nisi. Sed vel ullamcorper sem, ut facilisis ante. Pellentesque efficitur vehicula congue. Donec fermentum iaculis malesuada.',
            author : 'Mario'
        },
        { 
            id : 2,
            title : 'Welcome Web Party',
            body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis erat commodo, interdum metus vel, efficitur nisi. Sed vel ullamcorper sem, ut facilisis ante. Pellentesque efficitur vehicula congue. Donec fermentum iaculis malesuada.',
            author : 'Yoshi'
        },
        { 
            id : 3,
            title : 'Web Dev and Top Tips',
            body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis erat commodo, interdum metus vel, efficitur nisi. Sed vel ullamcorper sem, ut facilisis ante. Pellentesque efficitur vehicula congue. Donec fermentum iaculis malesuada.',
            author : 'Mr.John'
        },
        { 
            id : 4,
            title : 'React Tips and Tricks',
            body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis erat commodo, interdum metus vel, efficitur nisi. Sed vel ullamcorper sem, ut facilisis ante. Pellentesque efficitur vehicula congue. Donec fermentum iaculis malesuada.',
            author : 'Yoshi'
        },
    ])

    const handleDelete = (id) => {
       const deleteBlogs = blogs.filter( blog => blog.id !== id );
       setBlogs(deleteBlogs)
    }
    const title = 'All Blogs';
    return (
        <div className='home'>
            <BlogList blogs = {blogs} title = {title} handleDelete = {handleDelete} />
        </div>
    );
};

export default Home;