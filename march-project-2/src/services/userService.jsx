export const fetchUserData = async (userId) => {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    const userData = await response.json();
    return userData;
};
