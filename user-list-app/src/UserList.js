import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUser(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="user-container">
            <h2 className="title">User Directory</h2>
            <div className="user-grid">
                {listOfUser.map(user => (
                    <div key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
