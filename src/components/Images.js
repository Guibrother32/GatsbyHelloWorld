import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from './images.module.css'
import img from '../images/mountain1.jpg'

const getImages = graphql`
query MyQuery2 {
    fixed:file(relativePath:{eq:"vhs1.jpg"}) {
        childImageSharp{
            fixed(width:150,height:150){
                ...GatsbyImageSharpFixed
            }
        }
    },
    fluid:file(relativePath:{eq:"vhs2.jpg"}){
      childImageSharp{
        fluid{
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default () => {
    console.log(getImages);
    const data = useStaticQuery(getImages);
    console.log(data);

    return (
        <div className={styles.section__images}>
            <div className={styles.card}>
                <h1>Basic Image</h1>
                <img src={img} alt="test"></img>
                <p>Hold the image position so your page doesn’t jump while images load.</p>
            </div>
            <div className={styles.card}>
                <h1>Fixed Image</h1>
                <Img fixed={data.fixed.childImageSharp.fixed} />
                <p>Hold the image position so your page doesn’t jump while images load.</p>
            </div>
            <div className={styles.card}>
                <h1>Fluid Image</h1>
                <Img fluid={data.fluid.childImageSharp.fluid} />
                <div className={styles.small}>
                    <Img fluid={data.fluid.childImageSharp.fluid} />
                </div>
                <p>Hold the image position so your page doesn’t jump while images load.</p>
            </div>
        </div>
    )
}


//parent div is responsible for the fluid image size

//POSITIVE APPROACH

// Resize large images to the size needed by your design.
// Generate multiple smaller images so smartphones and tablets don’t download desktop-sized images.
// Strip all unnecessary metadata and optimize JPEG and PNG compression.
// Efficiently lazy load images to speed initial page load and save bandwidth.
// Use the “blur-up” technique or a ”traced placeholder” SVG to show a preview of the image while it loads.
// Hold the image position so your page doesn’t jump while images load.