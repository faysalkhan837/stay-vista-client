// import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";


const UseRole = () => {
    const { user, loding } = UseAuth();
    // const [loading, setLoading] = useState(true);
    // const [role, setRole] = useState(null);
    // useEffect(() =>{
    //     setLoading(true)
    //     getRole(user?.email)
    //     .then(data =>{setRole(data)})
    //     setLoading(false)
    // },[user])

    const { data: role, isLoading } = useQuery({
        enabled: !loding && !!user?.email,
        queryKey: ['role'],
        queryFn: async () => await getRole(user?.email)
    })
    return [role, isLoading];
};

export default UseRole;