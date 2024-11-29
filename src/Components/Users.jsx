import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUser = useLoaderData()
    const [users,setUsers]= useState(loadedUser)

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
              </tr>)
          }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;