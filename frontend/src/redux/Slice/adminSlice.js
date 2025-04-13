import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch all users (admin only)
export const fetchUsers = createAsyncThunk(
  "admin/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// create a new user (admin only)
export const addUser = createAsyncThunk(
  "admin/addUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// update user info (admin only)
export const updateUser = createAsyncThunk(
  "admin/updateUser",
  async ({ id, name, email, role }) => {
   
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
        { name, email, role },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data.user;
    }
);

// delete a user (admin only)
export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch users";
      })

      // Add User
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload.user); // Assuming `user` is returned
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add user";
      })

      // Update User
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload);
        
        const updatedUser = action.payload;
        const index = state.users.findIndex(
          (user) => user._id === updatedUser._id
        );
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update user";
      })

      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user._id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to delete user";
      });
  },
});

export default adminSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // fetch all users (admin only)
// export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {



//     const response = await axios.get(
//         `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
//         {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//             }
//         }
//     );
//     return response.data;
// });

// // create a new user (admin only)
// export const addUser = createAsyncThunk(
//     "admin/addUser",
//     async (userData, { rejectWithValue }) => {
//         try {
//             const response = await axios.post(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
//                 userData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//                     },
//                 }
//             );
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );

// // update user info (admin only)
// export const updateUser = createAsyncThunk(
//     "admin/updateUser",
//     async ({ id, name, email, role }) => {

//         const response = await axios.put(
//             `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
//             { name, email, role },
//             {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//                 },
//             }
//         );
//         return response.data;
//     }

// );


// // delete a user (admin only)
// export const deleteUser = createAsyncThunk(
//     "admin/deleteUser",
//     async (id) => {

//         await axios.delete(
//             `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//                 },
//             }
//         );
//         return id;
//     }
// );


// const adminSlice = createSlice({
//     name: "admin",
//     initialState: {
//         users: [],
//         loading: false,
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchUsers.pending, (state) => {
//                 state.loading = true;
//                 // state.error = null;
//             })
//             .addCase(fetchUsers.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//             .addCase(fetchUsers.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             })

//             .addCase(updateUser.fulfilled, (state, action) => {
//                 const updatedUser = action.payload;
//                 const userIndex = state.users.findIndex(
//                     (user) => user._id === updatedUser._id
//                 );
//                 if(userIndex !== -1){
//                     state.users[userIndex] = updatedUser;
//                 }
//             })
//             .addCase(deleteUser.fulfilled, (state, action) => {
//                 state.users = state.users.filter((user)=> user._id !== action.payload);
//             })
//             .addCase(addUser.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(addUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users.push(action.payload.user); // add new user
//             })
//             .addCase(addUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             })

//     }
// })

// export default adminSlice.reducer;
