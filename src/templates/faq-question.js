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
    <Layout>
      <div className="Faq">
        <div>
          {faq.map((question, index) => (
	    <FaqQuestionPreview
              key={question.id}
              title={`${index + 1}. ${question.frontmatter.title}`}
              content={dangerouslySetInnerHTML={{ __html: question.html }}}
            />
          ))}
        </div>
      </div>
    </Layout>
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
