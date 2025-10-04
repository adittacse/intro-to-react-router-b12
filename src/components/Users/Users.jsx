import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData();
    
    return (
        <div>
            <p>{users.length}</p>
        </div>
    );
};

export default Users;