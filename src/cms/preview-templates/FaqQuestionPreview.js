import React from 'react'
import PropTypes from 'prop-types'
import { FaqQuestionTemplate } from '../../templates/faq-question'

const FaqQuestionPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <FaqQuestionTemplate
      content={widgetFor('body')}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
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
