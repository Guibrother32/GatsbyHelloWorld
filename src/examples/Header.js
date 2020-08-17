//this one was typed by me

//In CodeExplorer(GraphQL) -> StaticQueryHook useStaticQuery -> hook

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
const getData = graphql`query anyUniqueName{
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
  }`; //allias info:siteMetadata -> changing name of an property

const Header = () => {
    const { site: { info: { title, person: { name } } } } = useStaticQuery(getData);
    //destructuring approach example

    return (
        <div>
            {/* <p>Title: {data.site.siteMetadata.title}</p>
            <p>Name: {data.site.siteMetadata.person.name}</p> */}
            <p>Title: {title}</p>
            <p>Name: {name}</p>
        </div>
    )
}

export default Header;
