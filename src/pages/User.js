import React, { useEffect,useState } from 'react';
import axios from 'axios';
import UserList from '../componets/UserList';
import Spinner from '../componets/Spinner';
import {useParams} from 'react-router-dom';
const User = () =>{
    const [users,setUser]= useState(null);
    const [loading,setLoading]= useState(true);
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
        
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
            .then((response)=>{
                console.log(response);
                setUser(response.data);
                setLoading(false);
            });
   },[]);

   const userDetail=loading?<Spinner/>:(
       <div>
           <div>{users.name}</div>
           <div>{users.email}</div>
           <div>{users.phone}</div>
       </div>
   )

    return(
        <>
            <h1>User 정보</h1>
            {userDetail}

        </>
    );
};
export default User;