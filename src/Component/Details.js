import React, { useEffect } from 'react'

const Details = () => {

    const birthday = () => {
        const getuserdata = localStorage.getItem('user_login')

        if (getuserdata && getuserdata.length) {
            const user = JSON.parse(getuserdata);
        }

    }


    useEffect(() => {
        birthday();
    }, []);
    return (
        <div>details</div>
    )
}

export default Details;