import { graphql } from 'gatsby'
import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
import "./accordion-styles.css";

export default function App({ data }) {
  console.log(data)
  const faq = data.allMarkdownRemark.nodes

  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <Layout>
      <div className="App">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
	  	<div className="question-align">
                <h4 className="question-style">
	        { faq.frontmatter.title }
                </h4>
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>{ faq.frontmatter.description }</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </Layout>
  );
}

//export page query
  export const query = graphql
    query FAQPage {
      allMarkdownRemark {
        nodes {
	  frontmatter {
	    title
	  }
	}
      }
    }
