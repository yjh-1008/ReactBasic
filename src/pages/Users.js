import React, { useEffect,useState } from 'react';
import axios from 'axios';
import UserList from '../componets/UserList';
import Spinner from '../componets/Spinner';
const Users = () =>{
    const [users,setUsers]= useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                setUsers(response.data);
                setLoading(false);
            });
   },[]);
    return(
        <>
            <h1>Users</h1>
            {loading?<Spinner></Spinner> : <UserList users={users}/>}
            

        </>
    );
};
export default Users;