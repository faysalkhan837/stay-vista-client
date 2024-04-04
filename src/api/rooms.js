import axiosSecure from "."

// fetch all rooms data from db....
export const getAllRooms =async () =>{
    const {data} = await axiosSecure.get('/rooms');
    return data;
}

// fetch all rooms for host....
export const getHostRooms = async email =>{
    const {data} = await axiosSecure.get(`/rooms/${email}`)
    return data;
}

// fetch single room data from db....
export const getRoom = async id =>{
    const {data} = await axiosSecure.get(`/room/${id}`);
    return data;
}

// save room data in db....
export const addRoom = async roomData =>{
    const {data} = await axiosSecure.post('/rooms', roomData);
    return data;
}
