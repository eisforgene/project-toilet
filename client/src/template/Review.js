import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_TOILETS } from '../utils/queries';
// import { Link } from 'react-router-dom';

const DisplayReview = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_TOILETS);
    console.log('test');

    const toilets = data?.toilets || [];

    if (error) {
        console.log(error);
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return(
        <div>
            <h1>
                Display Reviews
            </h1>

            {/* <pre>
                {JSON.stringify(toilets, null, 2)}
            </pre> */}

            {toilets.map(toilet => {
                return (
                    <div>
                        <h2>Address: {toilet.address}</h2>
                        <p>zipcode: {toilet.zipcode}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default DisplayReview;