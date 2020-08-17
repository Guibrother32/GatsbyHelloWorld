import React from "react"
import Layout from '../components/Layout';
import {ExampleButton} from '../components/button';

export default () => (
  <div>
    <Layout>
      <h1 >Hello world!</h1>

      <a href="https://www.gatsbyjs.org">Gatsby Docs</a>
      <br/>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  </div>
);
