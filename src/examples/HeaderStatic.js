//In CodeExplorer(GraphQL) -> StaticQuery
//This is an older approach (but you can use both)

import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
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
    `}
    render={data => <div><br /><p>Description: {data.site.info.description}</p><br /></div>}
  ></StaticQuery>
)

export default ComponentName;
