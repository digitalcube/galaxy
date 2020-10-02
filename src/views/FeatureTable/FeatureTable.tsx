/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from 'styled-components';
import { Styled } from 'theme-ui';
import { useThemeUI, Container } from 'theme-ui';
import { FC } from 'react';
import { Check } from '@styled-icons/fa-solid';

export type FeatureTable = {};

export const StyledCheck = styled(Check)`
  color: ${props => props.color};
`;

export const FeatureTable: FC<FeatureTable> = ({}: FeatureTable) => {
  const context = useThemeUI();
  const { theme } = context;
  const iconSize = theme?.space ? theme?.space[2] : ``;
  const iconColor = theme?.colors?.accent;
  return (
    <Container
      size="4"
      sx={{
        px: '5%',
        py: 4,
      }}
    >
      <Styled.table>
        <Styled.tr>
          <Styled.th>Plans</Styled.th>
          <Styled.td>Free</Styled.td>
          <Styled.td>Tier 1</Styled.td>
        </Styled.tr>
        <Styled.tr>
          <Styled.th>Sites</Styled.th>
          <Styled.td>1</Styled.td>
          <Styled.td>1</Styled.td>
        </Styled.tr>
        <Styled.tr>
          <Styled.th>Storage</Styled.th>
          <Styled.td>500 MB</Styled.td>
          <Styled.td>5 GB</Styled.td>
        </Styled.tr>
        <Styled.tr>
          <Styled.th>Bandwidth</Styled.th>
          <Styled.td>1 GB</Styled.td>
          <Styled.td>50 GB</Styled.td>
        </Styled.tr>
        <Styled.tr>
          <Styled.th>HTTPS</Styled.th>
          <Styled.td>
            <StyledCheck color={iconColor} size={`${iconSize}`} />
          </Styled.td>
          <Styled.td>
            <Check color={iconColor} size={`${iconSize}`} />
          </Styled.td>
        </Styled.tr>
      </Styled.table>
    </Container>
  );
};
