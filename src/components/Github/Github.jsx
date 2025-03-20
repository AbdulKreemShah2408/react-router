import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/AbdulKreemShah2408')
            .then(response => response.json()) // Call json() properly
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error("Error fetching data:", error)); // Handle errors

    }, []);

    return (
        <div className='text-center m-4 text-white bg-gray-600 p-4 text-3xl'>
            Github Follower:
            {data ? <p>{data.followers} Followers</p> : <p>Loading...</p>}
            Name:
            {data ? <p>{data.name} </p> : <p>Loading...</p>}
        </div>
    );
}

export default Github;
export const githubInfoLoader = async () => {
    const response = await fetch('https://github.com/AbdulKreemShah2408')
    return response.json()
}
