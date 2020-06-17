// src/components/Deploys.js

import React from "react"
import { Card } from "./Card"
import DeployList from "./DeployList"
import { Tip } from "./Tip"

function Deploys({ loading, deploys }) {
  return (
    <Card title="Deploys" action={<Tip tip="Hello World" label="Tip" />}>
      <DeployList loading={loading} deploys={deploys} />
    </Card>
  )
}

export default Deploys
