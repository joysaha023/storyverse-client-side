import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyblogCard from '../../Components/MyblogCard/MyblogCard';


const MyBlog = () => {
const {user} = useAuth();
const [item, setItems] = useState([]);

useEffect(()=> {
    fetch(`http://localhost:5000/myblog/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
        setItems(data)
    })
}, [user])
console.log()

    return (
        <div className='max-w-6xl mx-auto'>
            <h2>My Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    item.map(data => <MyblogCard key={data._id} data={data}></MyblogCard>)
                }
            </div>
        </div>
    );
};

export default MyBlog;