import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'

const SubmitIdeaPage = () => (
  <div className="idea">
    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
    <iframe
      className="airtable-embed airtable-dynamic-height"
      title="create-idea-form"
      src="https://airtable.com/embed/shrbPCJw2eEGtDpyN?backgroundColor=yellow"
      frameBorder="0"
      width="100%"
      height="1626"
    />

  </div>
)

export default SubmitIdeaPage
