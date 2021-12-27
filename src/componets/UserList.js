import React from 'react';

const UserList=({users})=>{
    console.log(users);
    return(
        <div>
            {users.map(user=>{
                return (
                <div className="card" key={user.id}>
                    <div className="card-body p-3">
                        {user.name}
                    </div>
                </div>);
            })}
        </div>    
    );
};

export default UserList;