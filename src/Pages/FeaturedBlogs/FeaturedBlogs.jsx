import { useQuery } from '@tanstack/react-query';
import React from 'react';

const FeaturedBlogs = () => {

    const {isPending, data} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/featuredblog');
            return res.json();
        }
    })

    if(isPending){
        return(<div className="text-center mt-20">
        <span className="loading  loading-spinner loading-lg"></span>
      </div>)
    }

   console.log(data)

    return (
        <div className='max-w-6xl mx-auto'>
            <h2>Featured Blog</h2>
        </div>
    );
};

export default FeaturedBlogs;