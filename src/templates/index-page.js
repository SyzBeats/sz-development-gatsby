import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import SkewedSection from "../components/SkewedSection";
import { RoundImage } from "../components/media/Image";
import { HeadlineSecondary } from "../components/typography/Headlines";
import { FlexRowHor, FlexRowVert } from "../components/layout/Flexrows";

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro, main }) => (
  <div>
    <div className='full-width-image margin-top-0'>
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}>
        <h1
          className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
          style={{
            boxShadow: "rgb(0, 21, 29) 0.5rem 0px 0px, rgb(0, 19, 26) -0.5rem 0px 0px",
            backgroundColor: "rgb(0, 21, 29)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
            textAlign: "center"
          }}>
          {title}
        </h1>
        <h2
          className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen'
          style={{
            boxShadow: "rgb(10, 61, 75) 0.5rem 0px 0px, rgb(10, 61, 75) -0.5rem 0px 0px",
            backgroundColor: "rgb(10, 61, 75)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
            textAlign: "center"
          }}>
          {subheading}
        </h2>
      </div>
    </div>
    <SkewedSection gradientColor='light' angle={15} color='white'>
      <FlexRowHor>
        <RoundImage src={main.image4.image.childImageSharp.fluid.src} alt='Simeon Zimmermann' />
        <FlexRowVert style={{ width: "40vw", margin: "2rem" }}>
          <HeadlineSecondary>Willkommen bei SZ Development</HeadlineSecondary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates, molestiae eius perspiciatis similique minus iste unde odit ex ipsa
            impedit deserunt quaerat. Porro vero est unde quasi magni quidem.
          </p>
        </FlexRowVert>
      </FlexRowHor>
    </SkewedSection>
    <SkewedSection gradientColor='dark' angle={-15} color='#333'>
      <p>test</p>
    </SkewedSection>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div className='content'>
                  <div className='tile'>
                    <h1 className='title'>{mainpitch.title}</h1>
                  </div>
                  <div className='tile'>
                    <h3 className='subtitle'>{mainpitch.description}</h3>
                  </div>
                </div>
                <div className='columns'>
                  <div className='column is-12'>
                    <h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className='columns'>
                  <div className='column is-12 has-text-centered'>
                    <Link className='btn' to='/products'>
                      See all products
                    </Link>
                  </div>
                </div>
                <div className='column is-12'>
                  <h3 className='has-text-weight-semibold is-size-2'>Latest stories</h3>
                  <BlogRoll />
                  <div className='column is-12 has-text-centered'>
                    <Link className='btn' to='/blog'>
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }

        main {
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 450, quality: 85) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
