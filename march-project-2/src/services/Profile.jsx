import React, { useState, useEffect } from 'react';
import { fetchUserData } from './userService';

const Profile = () => {
    const [user, setUser] = useState(null);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await fetchUserData(userId);
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUser();
    }, [userId]);

    return (
        <div>
            {user ? (
                <div>
                    <h2>User Profile</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {/* Display other user information */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
