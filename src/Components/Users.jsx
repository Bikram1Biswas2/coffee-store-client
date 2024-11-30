import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {

    const loadedUser = useLoaderData()
    const [users,setUsers]= useState(loadedUser)

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/users/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                      });
                }
              const remaining = users.filter(u => u._id !== _id)
              setUsers(remaining)
            })
            }
          });
        }

    return (
        <div>
            <h2>Users:{users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Login At</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
          {
            users.map((user,index) =><tr key={user._id} className="bg-base-200">
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user?.lastSignInTime}</td>
                <td>
                    <button className="btn">Edit</button>
                    <button onClick={()=>handleDelete(user._id)} className="btn">Delete</button>
                </td>
              </tr>)
          }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;