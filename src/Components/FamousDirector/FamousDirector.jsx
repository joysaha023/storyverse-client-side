import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import DirectorCard from '../DirectorCard/DirectorCard';

const FamousDirector = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://storyverse-website-server-side.vercel.app/director`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      }, []);

    // const {isPending, data: users} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('https://storyverse-website-server-side.vercel.app/director');
    //         return res.json();
    //     }
    // })

    // if(isPending){
    //     return(<div className="text-center mt-20">
    //     <span className="loading  loading-spinner loading-lg"></span>
    //   </div>)
    // }
    // console.log(users)

    

    return (
        <div className='max-w-6xl mx-auto'>
             <div className=' my-4 md:my-10'>
                <h2 className='text-2xl md:text-4xl p-2 font-bold'>World Famous <span className='text-[#3498DB]'>Directors</span> </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(item => <DirectorCard key={item._id} item={item}></DirectorCard>)
                }
            </div>
        </div>
    );
};

export default FamousDirector;