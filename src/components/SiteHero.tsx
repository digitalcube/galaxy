// src/components/Deploys.js

import React from "react"
import {
  Row as ReactstrapRow,
  Col as ReactstrapCol,
  Container as ReactstrapContainer,
} from "reactstrap"
import { Card } from "./Card"
import { Screenshot } from "./Screenshot"
import { Browser } from "./Browser"

type SiteHero = {
  shifter: {
    title: string
    url: string
  }
}

export const SiteHero = ({ shifter: { title, url } }: SiteHero) => (
  <Card>
    <ReactstrapContainer fluid>
      <ReactstrapRow>
        <ReactstrapCol sm="8">
          <div className="overflow-hidden">
            <div className="text-truncate">
              <h2 className="h4">{title}</h2>
              <a target="_blank" rel="noopener noreferrer" href={url}>
                {url}
              </a>
            </div>
          </div>
        </ReactstrapCol>
        <ReactstrapCol className="d-flex justify-content-md-end">
          <Browser>
            <Screenshot
              alt={`${title} screenshot`}
              url="https://en.digitalcube.jp"
            />
          </Browser>
        </ReactstrapCol>
      </ReactstrapRow>
    </ReactstrapContainer>
  </Card>
)
