import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SeeAllReview from '../../Components/SeeAllReview/SeeAllReview';

const AllReviews = () => {


     const {isPending, data: users} = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await fetch('http://localhost:5000/review');
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
            <div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    users.map((item) => <SeeAllReview key={item._id} item={item}></SeeAllReview>)
                }
            </div>
        </div>
    );
};

export default AllReviews;