import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/SignUp/ErrorPage";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import { getRoom } from "../api/rooms";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddRoom from "../Pages/Dashbord/Host/AddRoom";
import MyListings from "../Pages/Dashbord/Host/MyListings";
import HostRoute from "./HostRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/Dashbord/Admin/ManageUsers";
import Profile from "../Pages/Dashbord/Common/Profile";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/room/:id',
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
                loader: ({ params }) => getRoom(params.id)
            }
        ]
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/dashbord',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'add-room',
                element:
                    <PrivateRoute>
                        <HostRoute>
                            <AddRoom></AddRoom>
                        </HostRoute>
                    </PrivateRoute>
            },
            {
                path: 'my-listings',
                element:
                    <PrivateRoute>
                        <HostRoute>
                            <MyListings></MyListings>
                        </HostRoute>
                    </PrivateRoute>
            },
            {
                path: 'manage-users',
                element:
                    <PrivateRoute>
                        <AdminRoute>
                            <ManageUsers></ManageUsers>
                        </AdminRoute>
                    </PrivateRoute>
            },
            {
                path: 'profile',
                element:
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
            }
        ]
    }
])