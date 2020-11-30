import React from 'react';
import styled from 'styled-components';

import { variables, mediaQueries } from "./variables";

const { colors } = variables;
const { spacing } = variables.spacing;
const { heading, body } = variables.fonts;
const { svgs } = variables;

export const HomeStyles = styled.div`

  &.no-scroll {
    height: 60vh;
    overflow: hidden;
  }
`;