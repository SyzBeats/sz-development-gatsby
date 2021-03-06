import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className='columns is-multiline'>
        {posts &&
          posts.map(({ node: post }) => (
            <div className='is-parent column is-4' key={post.id}>
              <article className={`blog-card blog-list-item box notification ${post.frontmatter.featuredpost ? "is-featured" : ""}`}>
                <header className='blog-card_header'>
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `Featured Image fuer den Beitrag: ${post.frontmatter.title}`
                      }}
                    />
                  ) : null}
                </header>
                <div className='blog-card_body'>
                  <p className='post-meta blog-card_title has-text-centered'>
                    <Link className='title is-size-4' to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <br />
                    <span className='subtitle is-size-5 is-block py-1'>vom {post.frontmatter.date}</span>
                  </p>
                  <p className='blog-card_excerpt'>
                    {post.excerpt}
                    <br />
                  </p>
                </div>
                <div className='blog-card_footer'>
                  <Link className='blog-card_button text--white' to={post.fields.slug}>
                    Weiterlesen
                  </Link>
                </div>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "DD.MM.YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 420, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
