import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BlogSingleCard from '../BlogSingleCard/BlogSingleCard';
import { Link } from 'react-router-dom';

const RecentBlog = () => {
    
    const {isPending, data: users} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogposts');
            return res.json();
        }
    })

    if(isPending){
        return(<div className="text-center mt-20">
        <span className="loading  loading-spinner loading-lg"></span>
      </div>)
    }


    return (
        <div className='max-w-6xl mx-auto'>
            <div className='my-10'>
                <h2 className='text-4xl font-bold'>Recent Blogs</h2>
                <p>This is where you can get a recent blog which is added by recently from our users. and these blogs are most popular movies data. you can enjoy read blog</p>
            </div>
            <div className='grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    users.slice(0, 6).map(item => <BlogSingleCard key={item._id} item={item}></BlogSingleCard>)
                }
            </div>
            <div className='my-6 text-center'>
                <Link to={"/allblogs"} className='btn rounded-xl bg-[#2C3E50] btn-md text-white hover:text-black'>All Blogs</Link>
            </div>
        </div>
    );
};

export default RecentBlog;