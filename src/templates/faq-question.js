import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "../pages/faq/accordion-styles.css";

// eslint-disable-next-line
export const FaqQuestionTemplate = ({ title, content, contentComponent }) => {
  const QuestionContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <QuestionContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FaqQuestionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const FaqQuestion = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FaqQuestionTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

FaqQuestion.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FaqQuestion;

export const FaqQuery = graphql`
  query FaqQuestion($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
