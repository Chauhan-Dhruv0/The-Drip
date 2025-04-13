import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, deleteUser, fetchUsers, updateUser } from "../../redux/Slice/adminSlice";

// const users = [
//   {
//     _id: 123,
//     name: "Dhruv Chauhan",
//     email: "example@gmail.com",
//     role: "admin",
//   },
//   {
//     _id: 12,
//     name: "Dhruv Chauhan",
//     email: "example@gmail.com",
//     role: "admin",
//   },
//   {
//     _id: 1,
//     name: "Dhruv Chauhan",
//     email: "example@gmail.com",
//     role: "customer",
//   },
// ];

function UserManagement() {

    const navigate =useNavigate();
    const dispatch = useDispatch();

  const {user} = useSelector((state)=> state.auth);
  const {users , loading, error} = useSelector((state)=>state.admin);

  useEffect(()=>{
    if(user && user.role !== "admin"){
      navigate("/");
    }
  },[user ,navigate]);

  useEffect(()=>{
    if( user && user.role === "admin"){
      dispatch(fetchUsers());
    }
  },[dispatch, user])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    // console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleRoleChange = (userId, newRole) => {
    dispatch(updateUser({id: userId, role: newRole}))
    // console.log({ id: userId, role: newRole });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId))
      // console.log("deleted user ", userId);
    }
  };

  return (
    <div className=" max-w-7xl mx-auto  sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="pb-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            User Management
          </h2>
          <p className="mt-2 text-gray-500">Manage users and their permissions</p>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>Error:{error}</p>}
        {/* Add User Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 ring-1 ring-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-blue-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </span>
            Create New User
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-3 px-6 text-white font-medium transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add User
              </button>
            </div>
          </form>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-100">
          <div className="px-6 py-5 bg-gray-50 border-b">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="bg-blue-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              User List
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative">
                        <select
                          value={user.role}
                          onChange={(e) => handleRoleChange(user._id, e.target.value)}
                          className="block w-full pl-4 pr-8 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none transition-all"
                        >
                          <option value="customer">Customer</option>
                          <option value="admin">Admin</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;

// import React, { useState } from "react";

// const users = [
//     {
//         _id:123,
//         name: "Dhruv Chauhan",
//         email: "example@gmail.com",
//         role: "admin",
//     },
// ];

// function UserManagement() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role: "customer",
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);

//         setFormData({
//             name: "",
//             email: "",
//             password: "",
//             role: "customer",
//         });
//     };

//     const handleRoleChange = (userId,newRole)=>{
//         console.log({id:userId , role:newRole});
        
//     }

//     const handleDeleteUser =(userId)=>{
//         if(window.confirm("Are you sure delete")){
//             console.log("deleted user ",userId);
            
//         }
//     }
//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <h2 className="text-2xl font-bold mb-6">User Management</h2>

//             {/* New user */}
//             <div className="p-6 rounded-lg mb-6">
//                 <h3 className="text-lg font-bold mb-4">Add New User</h3>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Role</label>
//                         <select
//                             name="role"
//                             value={formData.role}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded"
//                         >
//                             <option value="customer">Customer</option>
//                             <option value="admin">Admin</option>
//                         </select>
//                     </div>
//                     <button
//                         type="submit"
//                         className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//                     >
//                         Add User
//                     </button>
//                 </form>
//             </div>
//             {/* User List */}
//             <div className="overflow-auto shadow-md sm:rounded-lg">
//                 <table className="min-w-full text-left text-gray-500">
//                     <thead className="bg-gray-100 text-xs uppercase text-gray-700">
//                     <tr>
//                         <th className="py-3 px-4">Name</th>
//                         <th className="py-3 px-4">Email</th>
//                         <th className="py-3 px-4">Role</th>
//                         <th className="py-3 px-4">Action</th>
//                     </tr>
//                     </thead>
//                     {users.map((user)=>(
//                         <tr key={user._id} className="border-b hover:bg-gray-50">
//                             <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
//                                 {user.name}
//                             </td>
//                             <td className="p-4">{user.email}</td>
//                             <td className="p-4">
//                                 <select 
//                                     value={user.role} 
//                                     onChange={(e)=> handleRoleChange(user._id,e.target.value)}
//                                     className="p-2 border rounded"
//                                     >
//                                         <option value="customer">Customer</option>
//                                         <option value="admin">Admin</option>
//                                 </select>
//                             </td>
//                             <td className="p-4">
//                                 <button onClick={()=> handleDeleteUser(user._id)}
//                                         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                                         >Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </table>

//             </div>
//         </div>
//     );
// }

// export default UserManagement;
