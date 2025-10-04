import React, { use } from 'react';
import User from './User';

const Users2 = ({ usersPromise }) => {
    const users2 = use(usersPromise);

    return (
        <div>
            <h2>This is users 2</h2>
            <div>
                {
                    users2.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;