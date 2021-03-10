/* eslint-disable linebreak-style */

import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../foundation/Text';
// import propToStyle from '../../../../theme/utils/propToStyle';

const ListSkills = styled.ul`
list-style-type: none;
margin-top: 8px;
padding: 0;

li {
    color: ${({ theme }) => theme.colors.primary.light.color};
    transition: ${({ theme }) => theme.transition};
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}
}
`;

export default ListSkills;
