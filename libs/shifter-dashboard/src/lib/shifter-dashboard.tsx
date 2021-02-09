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
    </StyledShifterDashboard>
  );
}

export default ShifterDashboard;
