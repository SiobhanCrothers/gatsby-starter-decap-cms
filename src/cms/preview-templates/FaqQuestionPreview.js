import React from 'react';
import PropTypes from 'prop-types';
import FaqQuestionTemplate from '../../templates/faq-question';

const FaqQuestionPreview = ({ entry, widgetFor }) => {
  // Check if entry is defined
  if (!entry) {
    return <div>No preview available</div>;
  }

  // Access data specific to your "faq" collection
  const data = entry.get('data');
  const title = data ? data.get('title') : null;
  const body = data ? data.get('body') : null;
  const tags = data ? data.get('tags') : null;

  return (
    <FaqQuestionTemplate
      title={title}
      content={body}
      tags={tags && tags.toJS()}
    />
  );
};

FaqQuestionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default FaqQuestionPreview;
