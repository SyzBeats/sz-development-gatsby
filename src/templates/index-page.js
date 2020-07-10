import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import SkewedSection from "../components/SkewedSection";
import { RoundImage } from "../components/media/Image";
import { HeadlineSecondary, HeadlinePrimary, HeadlineTertiary } from "../components/typography/Headlines";
import { FlexRowHor, FlexRowVert } from "../components/layout/Flexrows";
import Terminal from "../components/features/Terminal";

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro, main }) => (
  <div>
    <div
      className='full-width-image margin-top-0'
      style={{
        minHeight: "45vh",
        backgroundSize: "cover",
        backgroundImage: "url(https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
      }}>
      <div
        style={{
          display: "flex",
          minHeight: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}>
        <HeadlinePrimary textColor='#f8f8f8' textAlignment='center'>
          {title}
        </HeadlinePrimary>
        <h2
          className=' is-size-5-mobile is-size-5-tablet is-size-4-widescreen'
          style={{
            boxShadow: "rgb(10, 61, 75) 0.5rem 0px 0px, rgb(10, 61, 75) -0.5rem 0px 0px",
            backgroundColor: "rgb(10, 61, 75)",
            color: "white",
            lineHeight: "2em",
            padding: "0.25em",
            textAlign: "center",
            letterSpacing: ".1rem",
            fontWeight: 200
          }}>
          {subheading}
        </h2>
      </div>
    </div>
    <Terminal />
    <SkewedSection zIndex={10} flexDirection='row' gradientColor='light' angle={15} color='white'>
      <FlexRowHor>
        <picture>
          {!!main.image4 && !!main.image4.image.childImageSharp && <RoundImage src={main.image4.image.childImageSharp.fluid.src} alt='Simeon Zimmermann' />}
        </picture>
        <FlexRowVert style={{ width: "40vw", margin: "2rem" }}>
          <HeadlineSecondary>Willkommen bei SZ&nbsp;Development</HeadlineSecondary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates, molestiae eius perspiciatis similique minus iste unde odit ex ipsa
            impedit deserunt quaerat. Porro vero est unde quasi magni quidem.
          </p>
          <div className='buttons--row'>
            <a href='#' className='button'>
              Portfolio
            </a>
            <a href='#' className='button'>
              Kontakt
            </a>
          </div>
        </FlexRowVert>
      </FlexRowHor>
    </SkewedSection>
    <SkewedSection zIndex={20} flexDirection='column' gradientColor='dark' angle={-15} color='#333'>
      <HeadlineSecondary className='py-2' textColor='white' textAlign='center' style={{ transform: "translateY(5rem) skewY(15deg)" }}>
        Eine Auswahl meiner Projekte
      </HeadlineSecondary>
      <Features textColor='white' gridItems={intro.blurbs} colWidth={6} />
    </SkewedSection>
    <div className='columns' style={{ zIndex: 20, position: "relative" }}>
      <div className='column is-12 has-text-centered'>
        <Link className='button' to='/products'>
          Alle Projekte ansehen
        </Link>
      </div>
    </div>
    <SkewedSection zIndex={10} flexDirection='column' gradientColor='light' angle={15} color='white'>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div className='column is-12'>
                    <HeadlineTertiary textColor='#f2f2f2' textAlign='center'>
                      Letzte Blogbeiträge
                    </HeadlineTertiary>
                    <BlogRoll />
                    <div className='column is-12 has-text-centered'>
                      <Link className='button' to='/blog'>
                        Hier Zum Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                <div className='column is-12'>
                  <h3 className='has-text-weight-semibold is-size-2'>Letzte Blogbeiträge</h3>
                  <BlogRoll />
                  <div className='column is-12 has-text-centered'>
                    <Link className='button' to='/blog'>
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
  }),
  main: PropTypes.shape({
    image4: PropTypes.object
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
                fluid(maxWidth: 800, quality: 90) {
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
