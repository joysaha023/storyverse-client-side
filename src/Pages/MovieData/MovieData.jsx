import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleMovie from '../../Components/SingleMovie/SingleMovie';



const MovieData = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch(`https://storyverse-website-server-side.vercel.app/moviedb/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [category]);

 

    return (
        <div className='max-w-6xl mx-auto'>
            <div>
            <h2 className="text-xl md:text-3xl text-center my-1 md:my-4 font-bold">Directors Movie List</h2>
            </div>
            <div  className="grid grid-cols-1 p-3 md:grid-cols-2 gap-4 mt-4">
               {
                data.map((item) => <SingleMovie key={item._id} item={item}></SingleMovie> )
               }
            </div>
        </div>
    );
};

export default MovieData;