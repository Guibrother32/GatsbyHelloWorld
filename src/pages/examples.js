import React from 'react'
import Header from '../examples/Header';
import Layout from '../components/Layout';
import HeaderStatic from '../examples/HeaderStatic';
import { graphql } from 'gatsby';

//here we got data in props because we import graphql and exported data and pass in our query - Page Query approach
const examples = ({ data }) => { //here would be props, but props has a data property that we can extract
    const { site: { info: { author } } } = data; //destructuring - extrancting author property of data - different approach

    return (
        <div>
            <Layout>
                <p>Hello from examples page</p>
                <Header />
                <HeaderStatic />
                <p>Author: {author}</p>
            </Layout>
        </div>
    )
}

export const data = graphql`query MyQuery{
    site{
      info:siteMetadata{
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }`;
export default examples;