// src/components/DeployList.js

import React from "react";
import { Deploy } from "./Deploy";

function DeployList({ loading, deploys, onViewDeploy }) {
  const events = {
    onViewDeploy,
  };

  if (loading) {
    return <div className='list-items'>loading</div>;
  }

  if (deploys.length === 0) {
    return <div className='list-items'>empty</div>;
  }

  return (
    <div className='list-items'>
      {deploys.map((deploy) => (
        <Deploy key={deploy.id} deploy={deploy} {...events} />
      ))}
    </div>
  );
}

export default DeployList;
