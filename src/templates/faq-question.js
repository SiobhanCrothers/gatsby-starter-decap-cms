import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "../pages/faq/accordion-styles.css";

// eslint-disable-next-line
export const FaqQuestionTemplate = ({ title, content, contentComponent, tags }) => {
  const QuestionContent = contentComponent || Content;


  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="question-align">
          <h4 className="question-style">
            {title}
          </h4>
        </div>
        <div>
          <QuestionContent className="content" content={content} />
        </div>
      </div>
    </section>
  );
};


  return (
    <Layout>
      <div className="Faq">
        <div>
          {faq.map((question, index) => (
            <button
              key={question.id}
              className={`question-section ${activeItems[index] ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="question-align">	  
                <h4 className="question-style">
                  {`${index + 1}. ${question.frontmatter.title}`}
                </h4>
              </div>
              <div
                ref={contentRefs[index]}
                className={activeItems[index] ? `answer answer-divider` : `answer`}
                dangerouslySetInnerHTML={{ __html: question.html }}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

FaqQuestionTemplate.propTypes = {
  content: PropTypes.node.isrequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
};

const FaqQuestion = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FaqQuestionTemplate
        content={post.html}
        contentComponent={HTMLContent}
	tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

FaqQuestion.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default FaqQuestion;

export const FaqQuery = graphql`
  query FaqQuestion($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
	tags
      }
    }
  }
`;
