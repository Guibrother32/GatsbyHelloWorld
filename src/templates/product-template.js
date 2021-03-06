import React from 'react'
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './product-template.module.css';

const productTemplate = (props) => {
  console.log(props.data.contentfulProduct);

  const { data: { contentfulProduct: prod } } = props;

  return (
    <>
      <Layout>
        <div style={{ textAlign: "center" }}>
          <Link to="/products">Go back to all products</Link>
        </div>
        <div className={styles.productTemplate}>

          <Img fixed={prod.image.fixed}></Img>
          <div className={styles.description}>
            <h1>{prod.title}</h1>
            <p>{prod.info.info}</p>
            <p>Price: ${prod.price}</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query GetSingleProduct($slug:String){
    contentfulProduct(slug: {eq: $slug}) {
      title
      price
      info {
        info
      }
      image {
        fixed(width:350, height:250) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default productTemplate
