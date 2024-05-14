import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import WishlistCard from "../../Components/WishlistCard/WishlistCard";
import Swal from "sweetalert2";

const WishList = () => {
  const { user } = useAuth();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/wishlist/${user?.email}`, {credentials: 'include'})
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/wishdelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Removed!",
            text: "Your item has been Removed.",
            icon: "success",
          });
          const remaining = item.filter((item) => item._id !== id);
          setItem(remaining);
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-xl md:text-3xl text-center my-1 md:my-4 font-bold">Wishlist Items</h2>
      <div className="grid grid-cols-1 md:mt-6 md:grid-cols-2 p-2 lg:grid-cols-3 gap-5">
        {item.map((data) => (
          <WishlistCard key={data._id} handleDelete={handleDelete} data={data}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default WishList;
