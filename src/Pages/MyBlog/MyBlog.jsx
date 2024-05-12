import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyblogCard from '../../Components/MyblogCard/MyblogCard';
import Swal from 'sweetalert2';


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


const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to get back this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = item.filter(item => item._id !== id);
              setItems(remaining);
            }
          });
      }
    });
  }

    return (
        <div className='max-w-6xl mx-auto'>
            <h2>My Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    item.map(data => <MyblogCard key={data._id} data={data} handleDelete={handleDelete}></MyblogCard>)
                }
            </div>
        </div>
    );
};

export default MyBlog;