import React from 'react';
import Layout from '../components/Layout';

const notFound = () => {
    return (
        <Layout>
            <h1>Sorry, we not find the page you're looking for!</h1>
        </Layout>
    )
}

export default notFound;

//once we deploy our website to production we're gonna see this page right away - not the gatsby one
