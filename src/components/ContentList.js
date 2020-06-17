// src/components/ContentList.js

import React from "react"
import {
  Container as ReactstrapContainer,
  Row as ReactstrapRow,
  Col as ReactstrapCol,
} from "reactstrap"
import { Content } from "./Content"

function ContentList({ loading, content, onViewContent }) {
  const events = {
    onViewContent,
  }

  if (loading) {
    return <div className="list-items">loading</div>
  }

  if (content.length === 0) {
    return <div className="list-items">empty</div>
  }

  return (
    <ReactstrapContainer>
      <ReactstrapRow>
        {content.map((content) => (
          <ReactstrapCol md="4">
            <Content key={content.id} content={content} {...events} />
          </ReactstrapCol>
        ))}
      </ReactstrapRow>
    </ReactstrapContainer>
  )
}

export default ContentList
