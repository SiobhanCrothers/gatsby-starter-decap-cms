import React from 'react'
import PropTypes from 'prop-types'
import FaqQuestionTemplate from '../../templates/faq-question'

const FaqQuestionPreview = ({ entry, widgetFor }) => {
  // Check if entry is defined
  if (!entry) {
    return <div>No preview available</div>;
  }

  // Check if data and title are defined
  const data = entry.get('data');
  const title = data ? data.get('title') : null;

  // Check if title is defined
  if (!title) {
    return <div>No title available</div>;
  }

  const tags = data ? data.get('tags') : null;

  return (
    <FaqQuestionTemplate
      title={title}
      content={widgetFor('body')}
      tags={tags && tags.toJS()}
    />
  )
}

FaqQuestionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqQuestionPreview
