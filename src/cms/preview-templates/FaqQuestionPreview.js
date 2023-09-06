import React from 'react'
import PropTypes from 'prop-types'
import { FaqQuestionTemplate } from '../../templates/faq-question'

const FaqQuestionPreview = ({ entry, widgetFor }) => (
  <FaqQuestionTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FaqQuestionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqQuestionPreview
