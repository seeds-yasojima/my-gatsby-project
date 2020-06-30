import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default ({ data }) => (
    <Layout>
        <div className="eyecatch">
            <figure>
            <Img
                fluid={data.contentfulBlogPost.eyecatch.fluid}
                alt={data.contentfulBlogPost.eyecatch.description}
            />
            </figure>
        </div>
        <article className="content">
            <div className="container">
            <h1 className="bar">{data.contentfulBlogPost.title}</h1>
            <aside className="info">
                <time dateTime={data.contentfulBlogPost.publishDate}>
                    <FontAwesomeIcon icon={faClock} />
                    {data.contentfulBlogPost.publishDateJP}
                </time>
                <div className="cat">
                <FontAwesomeIcon icon={faFolderOpen} />
                <ul>
                    {data.contentfulBlogPost.category.map(cat => (
                        <li className={cat.categorySlug} key={cat.id}>
                            {cat.category}
                        </li>
                    ))}
                </ul>
                </div>
            </aside>
            <div className="postbody">
                <p>
                記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                </p>
            </div>
            <ul className="postlink">
                <li className="prev">
                <a href="base-blogpost.html" rel="prev">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>前の記事</span>
                </a>
                </li>
                <li className="next">
                <a href="base-blogpost.html" rel="next">
                    <span>次の記事</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </a>
                </li>
            </ul>
            </div>
        </article>
    </Layout>
)

export const query = graphql`
    query {
        contentfulBlogPost {
            title
            publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
            publishDate
            category {
                category
                categorySlug
                id
            }
            eyecatch {
                fluid(maxWidth: 1600) {
                    ...GatsbyContentfulFluid_withWebp
                }
                description
            }
        }
    }
`
