import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styles from '../styles/products.module.css'

const ComponentName = ({ data }) => {
  console.log(data);

  const { allContentfulProduct: { nodes: products } } = data;
  //products here is an allias(different name)

  return (
    <>
      <Layout>
        <section className={styles.section__images}>
          {products.map((prod) => {
            return <div className={styles.card} key={prod.id}>
              <h2 className={styles.title}>{prod.title}</h2>
              <Img fluid={prod.image.fluid} className={styles.imageSize}></Img>
              <Link to={`/products/` + prod.slug} className={styles.link}>See details</Link>
              <p className={prod.price > 100 ? styles.expensive : styles.cheap}>Price:{prod.price}</p>
            </div>
          })}
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        title
        slug
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
