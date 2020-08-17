//this one is copied

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
    }
  `);
    return <div>
        <p>Name:</p>
        <p>{data.site.siteMetadata.person.name}</p>
        <br />
        <p>Age:</p>
        <p>{data.site.siteMetadata.person.age}</p>
    </div>
}

export default ComponentName;

//as we're exporting as default dont really matter the name
