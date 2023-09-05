import { graphql } from 'gatsby'
import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
import "./accordion-styles.css";

export default function Faq({ data }) {

  const faq = data.allMarkdownRemark.nodes;

  // Maintain separate state and ref for each FAQ item
  const [activeItems, setActiveItems] = useState(Array(faq.length).fill(false));
  const contentRefs = faq.map(() => useRef(null));

  useEffect(() => {
    // Update max height for each FAQ item based on its active state
    contentRefs.forEach((ref, index) => {
      ref.current.style.maxHeight = activeItems[index]
        ? `${ref.current.scrollHeight}px`
        : "0px";
    });
  }, [contentRefs, activeItems]);

  const toggleAccordion = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
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
              >
                <p>{question.frontmatter.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}

// Export page query
export const query = graphql`
  query FaqPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "faq" } } }
    ) {
      nodes {
        frontmatter {
          title
          description
        }
        id
      }
    }
  }
`;




