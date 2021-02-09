import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ShifterDashboardProps {}

const StyledShifterDashboard = styled.div`
  color: pink;
`;

export function ShifterDashboard(props: ShifterDashboardProps) {
  return (
    <StyledShifterDashboard>
      <h1>Welcome to shifter-dashboard!</h1>
      <p>It's a dummy component</p>
    </StyledShifterDashboard>
  );
}

export default ShifterDashboard;
