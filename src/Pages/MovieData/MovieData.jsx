import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleMovie from '../../Components/SingleMovie/SingleMovie';



const MovieData = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:5000/moviedb/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [category]);

 

    return (
        <div className='max-w-6xl mx-auto'>
            <div>

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