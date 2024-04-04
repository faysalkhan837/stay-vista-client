import axiosSecure from "."

// Save users data on database
export const saveUser = async user =>{
    const currentUser={
        email: user.email,
        role: 'guest',
        status: 'verifide'
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data;
}


// get token from server...
export const getToken = async email =>{
    const {data} = await axiosSecure.post('/jwt', email)
    console.log('token data', data)
    return data;
}

// Clear cookies from brouser after LogOut...
export const clearCookie = async () =>{
    const {data} = await axiosSecure.get('/logout')
    console.log('token data', data)
    return data;
}
// get user role....
export const getRole = async email =>{
    const {data} = await axiosSecure.get(`/user/${email}`);
    return data.role;
}