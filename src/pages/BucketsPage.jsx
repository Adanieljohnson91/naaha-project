import React from 'react';
import Navigation from "../components/Navigation/Navigation";
import Authentication from "../auth/Authenticaion";


const Buckets = () =>{
    return (
        <>
        <h1>Buckets</h1>
        <Navigation/>
        </>
    )
}
export default Authentication(Buckets);